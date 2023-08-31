import { Octokit } from "octokit";
import { langStats } from "./types.d";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

const getLangStats = (repos: ({
  name: string,
  lang: any
}|null)[]) => {
  const langStats = new Map()
  repos.map((repo: any) => {
    return repo.lang
  }).map(lang => {
    Object.keys(lang).map((key: string) => {
      if (langStats.get(key)) {
        langStats.set(key, langStats.get(key) + lang[key])
      } else {
        langStats.set(key, lang[key])
      }
    })
  })
  const sum = Array.from(langStats).reduce((acc, [key, value]) => {
    return acc + value
  }, 0)
  const ret = Array.from(langStats)
  .map(([key, value]) => {
    return { key: key, value: value, percentage: (value * 100 / sum).toFixed(2) };
  }).sort((a, b) => {
    return b.value - a.value;
  });
  return ret
}

const getRepoLanguages = async (repo: string) => {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const languageStats = await octokit.request(`GET /repos/${process.env.GH_USER}/${repo}/languages`, {
    owner: process.env.user,
    repo: repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return languageStats.data;
}

export async function getGithubLangStats (): Promise<langStats> {
  const repos = await octokit.request(`GET /user/repos`, {
    sort: 'updated',
    direction: 'desc',
    type: 'owner',
    per_page: 100,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  const languages = (await Promise.all(repos.data.filter(repo => {
    return !repo.fork
  }).map(async (repo: {name: string;}) => {
    try {
      const lang = await getRepoLanguages(repo.name)
      return {
        name: repo.name,
        lang
      }
    } catch (error) {
      return null
    }
  }))).filter(repo => repo !== null)
  const langStats = getLangStats(languages)
  return langStats
}

export async function getGithubRepos () {
  const repos = await octokit.request(`GET /user/repos`, {
    sort: 'updated',
    direction: 'desc',
    type: 'owner',
    per_page: 100,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  const nonForkedRepos = await Promise.all(repos.data.filter(repo => {
    return !repo.fork
  }))
  return nonForkedRepos
}