import { BiLogoVuejs, BiLogoReact, BiLogoFlask } from "react-icons/bi"
import { SiNextdotjs, SiFastify, SiWebassembly, SiNuxtdotjs, SiPandas, SiPytorch } from "react-icons/si"

export default async function Frameworks() {
  return (
    <>
      <b>Libs and Frameworks</b>
      <div className='mt-6 flex flex-wrap gap-3'>
        <div className="badge badge-lg p-5 border-b-emerald-200"><BiLogoVuejs className='block mr-1' size={24} /> Vuejs </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><BiLogoReact className='block mr-1' size={24} /> Reactjs </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><BiLogoFlask className='block mr-1' size={24} /> Flask </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><SiNextdotjs className='block mr-1' size={24} /> Nextjs </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><SiFastify className='block mr-1' size={24} /> fastify </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><SiWebassembly className='block mr-1' size={24} /> wasm </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><SiNuxtdotjs className='block mr-1' size={24} /> nuxtjs </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><SiPandas className='block mr-1' size={24} /> pandas </div>
        <div className="badge badge-lg p-5 border-b-emerald-200"><SiPytorch className='block mr-1' size={24} /> pytorch </div>
      </div>
    </>
  )
}