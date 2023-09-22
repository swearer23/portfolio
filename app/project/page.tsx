import { BiLogoGithub } from 'react-icons/bi'
import { getGithubRepos } from '../misc/github'
import { Repo } from '../misc/types'


export default async function Home() {

  const repos = (await getGithubRepos()).map((repo: any) => {
    return {
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      language: repo.language,
    }
  }).filter((repo: Repo) => {return repo.description !== null})

  return (
    <>
      <article className="prose pl-10 mt-32">
        <h1 className="text-slate-600"><a className="underline decoration-emerald-200">Projects</a></h1>
        <b>Web Apps</b>
        <h2>
          <a href="https://dow.zspxy.xyz" target="_blank" className="decoration-emerald-200">
            # CrossFit WOD generator
          </a>
        </h2>
        <p>
          A CrossFit training plan (WOD) generator powered by GPT LLM and LangchainJS and Vercel <br />
          <a href="https://github.com/swearer23/wodgen-js" target="_blank">
            <BiLogoGithub className='inline-block mr-2' size={24} /> Github Repo
          </a>
        </p>
        <b>Demos</b>
        <h2>
          <a href="https://ttm.zspxy.xyz" target="_blank" className="decoration-emerald-200">
            # Twitter Thread to Markdown
          </a>
        </h2>
        <p>
          a simple tool to save a twitter thread to markdown file without calling twitter v2 elevated auth api. <br />
          <a href="https://github.com/swearer23/ttm" target="_blank">
            <BiLogoGithub className='inline-block mr-2' size={24} /> Github Repo
          </a>
        </p>
        <h2>
          <a href="https://spimask.zspxy.xyz" target="_blank" className="decoration-emerald-200">
            # Sensitive Information Mask SDK
          </a>
        </h2>
        A SDk and a set of solution for sensitive information disclosure <br />
        <ul>
          <li>easily integrated with Vuejs and Reactjs</li>
          <li>disclose one piece of information at a time, not the whole JSON object</li>
          <li>asymetric encrypted signature header added in replay request (enabled via wasm)</li>
          <li>restrictly workable only in entrusted web environment</li>
        </ul>
        <a href="https://github.com/swearer23/SImask" target="_blank">
          <BiLogoGithub className='inline-block mr-2' size={24} /> Github Repo
        </a>
        <div className="divider"></div>
        <b>Github Projects</b>
        <div className='grid grid-cols-2'>
          {
          repos.map((repo: Repo) => {
            return (
              <a href={repo.url} target='_blank' className='w-full opacity-30 hover:opacity-100 transition ease-in-out duration-300'>
                <div className="stats shadow w-full rounded-none box-shadow-sm hover:shadow-emerald-200 h-full">

                  <div className="stat">
                    <div className="stat-title">{repo.language}</div>
                    <div className="stat-value text-ellipsis overflow-hidden">{repo.name}</div>
                    <div className="stat-desc text-ellipsis overflow-hidden">{repo.description}</div>
                  </div>

                </div>
              </a>
            )
          })
        }
        </div>
      </article>
    </> 
  )
}
