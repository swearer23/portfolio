'use client'
import React, { useState } from 'react'
import {AiFillMessage} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'

export default function ContactForm () {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [toast, setToast] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target
    if (name === 'name') {
      setName(value)
    } else if (name === 'email') {
      setEmail(value)
    } else {
      setContent(value)
    }
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        content
      })
    }).then((res) => {
      if (res.status === 200) {
        setToast('Thanks for your message. I will reply ASAP')
        setTimeout(() => {setToast('')}, 3000)
      } else {
        setToast('Message failed to send')
        setTimeout(() => {setToast('')}, 3000)
      }
    }).finally(() => {
      setLoading(false)
    })
  }
  return (
    <>
      <form onSubmit={submit}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"><b className="text-emerald-200">W</b>hat can I call you?</span>
          </label>
          <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange} />
          <label className="label">
            <span className="label-text"><b className="text-emerald-200">A</b>nd your email address</span>
          </label>
          <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={onChange} />
          <label className="label">
            <span className="label-text"><b className="text-emerald-200">L</b>eave me a message</span>
          </label>
          <textarea name='content' className="textarea textarea-bordered h-24" placeholder="Bio" onChange={onChange} value={content}></textarea>
          <button className="btn mt-3" disabled={loading}>
            {
              loading ? <span className='loading loading-spinner'></span> : 'Send'
            }
            <AiFillMessage className="inline-block ml-2" size={18} />
          </button>
        </div>
        {
          toast ? <div className="toast toast-top toast-end">
            <div className="alert border-emerald-200">
              <FaHeart className='inline-block' size={18} />
              <span>{toast}</span>
            </div>
          </div> : ''
        }
      </form>
    </>
  )
}