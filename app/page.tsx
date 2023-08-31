import {AiFillGithub, AiOutlineTwitter} from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <article className="prose pl-10 mt-32">
        <h1 className="text-slate-600">LET ME INTRODUCE <a className="underline decoration-emerald-200">MYSELF</a></h1>

        <p>
          Hi This is Swift Young. I am from China. I am a <br/> 
          <a className="underline decoration-emerald-200 font-black"> Frontend </a> /
          <a className="underline decoration-emerald-200 font-black"> Fullstack </a> /
          <a className="underline decoration-emerald-200 font-black"> Reactjs </a> /
          <a className="underline decoration-emerald-200 font-black"> Vuejs </a> /
          <a className="underline decoration-emerald-200 font-black"> Nodejs </a> /
          <a className="underline decoration-emerald-200 font-black"> Python </a> developer.
        </p>
        <p>
          I first started programming in 2007, with RoR. Not until then did I found how enthusiatic I am about programming. <br/>
          After that things went on unstoppable. 14 years has gifted me a variety of experiences of programming languages and frameworks. 
          <a className="underline decoration-emerald-200 font-black"> tl;dr</a>
        </p>
        <p>
          My main experiences are in 
          <a className="underline decoration-emerald-200 font-black"> Frontend </a> /
          <a className="underline decoration-emerald-200 font-black"> Fullstack </a> with no regard of selection of frameworks.
          I'm also proficient in frontend / fullstack <a className="underline decoration-emerald-200 font-black"> architectures. </a>
        </p>
        <p>
          I have 5 years experiences in <a className="underline decoration-emerald-200 font-black">management </a>of <a className="underline decoration-emerald-200 font-black"> frontend team </a>
          Through which I have conclude a methodology of <a className="underline decoration-emerald-200 font-black"> what should frontend team focus on.</a>
        </p>
        <p>
          Also I can handle well in designing <a className="underline decoration-emerald-200 font-black">backend architectures </a> <br />
          Recently inspired by <a className="underline decoration-emerald-200 font-black">AIGC</a>, I have been studying and practising on things like: <br />
          <a className="underline decoration-emerald-200 font-black"> pytorch </a> /
          <a className="underline decoration-emerald-200 font-black"> data preprocessing</a> /
          <a className="underline decoration-emerald-200 font-black"> langchain </a> etc.
        </p>
        <p>
          Last and not least, You can always find me on: <br />
          <a className="underline decoration-emerald-200 font-black mr-5" href='https://github.com/swearer23'> <AiFillGithub size={24} className='inline-block' /> Github </a>
          <a className="underline decoration-emerald-200 font-black" href='https://twitter.com/yangshiwei23'> <AiOutlineTwitter size={24} className='inline-block' /> Twitter </a>
        </p>
      </article>
    </> 
  )
}
