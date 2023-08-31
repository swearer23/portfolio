export default async function Home() {
  return (
    <>
      <article className="prose pl-10 mt-32">
        <h1 className="text-slate-600">Here is the <a className="underline decoration-emerald-200">RESUME</a></h1>
        <b>Click link below to download</b>
        <h2>
          <a href="/resume.pdf" download={true} target="_blank" className="hover:text-emerald-200">
            # Resume
          </a>
        </h2>
      </article>
    </> 
  )
}