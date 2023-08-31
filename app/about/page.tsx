import React from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { langIconMap } from '../misc/const'
import { LangStats } from '../misc/types'
import LibsAndFramworks from '../components/frameworks'

export default async function Home() {

  const langStats = (await (await fetch(`${process.env.NEXT_BASE_URL}/api/github/language`, {
    cache: process.env.FETCH_CACHE as RequestCache
  })).json()).data

  langStats.forEach((element: LangStats) => {
    const key = element['key']
    element['icon'] = langIconMap.get(key)
  });

  return (
    <>
      <article className="prose pl-10 mt-32">
        <h1 className="text-slate-600"><a className="underline decoration-emerald-200">Skillset</a></h1>
        <b>Programming Languages</b>
        <div className='mt-6 flex flex-wrap mb-6'>
          {
            langStats.map(({key, percentage, icon}: {key: string, percentage: number, icon: any}) => {
              let i
              if (!icon) {
                i = <BiCodeAlt className='inline-block mr-2' size={24} />
              } else {
                i = React.createElement(icon, {
                  className: 'inline-block mr-2',
                  size: 24
                });
              }
              return (
                <div className="mr-5 mb-3 p-2 px-5 bg-gray-200 w-fit rounded-lg hover:shadow-emerald-200 hover:shadow-inner flex content-baseline transition ease-in-out duration-300" key={key}>
                  {i}
                  <span className='align-text-top'>{key}</span>
                  <div className="badge ml-2 mt-1">{percentage}%</div>
                </div>
              )
            })
          }
        </div>
        <LibsAndFramworks />
      </article>
    </> 
  )
}
