import ContactForm from "../components/contactForm"

export default async function Home() {
  
  return (
    <>
      <article className="prose pl-10 mt-32">
        <h1 className="text-slate-600">Want to know me <a className="underline decoration-emerald-200">BETTER?</a></h1>
        <div className="mb-5">
          <b>Email:</b> <br />
          <a href="mailto:swearer23@gmail.com" className="hover:text-emerald-200">
            swearer23@gmail.com
          </a>
        </div>
        <div>
          <b>Or JUST leave me a message</b>
          <ContactForm />
        </div>
      </article>
    </> 
  )
}