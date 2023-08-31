import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

export async function GET() {
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
  return NextResponse.json({ data: nonForkedRepos});
}