import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { contact } from '../../data/contact'

const Contact = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        e.target.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl">
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6">
        <h3 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">
          Get In Touch
        </h3>
        <p className="text-sm font-body text-slate-500 dark:text-slate-300 mb-5">
          Feel free to reach out for any opportunities or questions.
        </p>

        <div className="space-y-3">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200">
            <span className="w-9 h-9 rounded-lg bg-red-500 flex items-center justify-center text-white shrink-0">
              <FaEnvelope size={16} />
            </span>
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200">
            <span className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0">
              <FaPhone size={15} />
            </span>
            {contact.phone}
          </a>
        </div>

        <div className="flex gap-3 mt-5">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-body font-medium text-white px-3 py-2 rounded-lg bg-[#0A66C2]">
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-body font-medium text-white px-3 py-2 rounded-lg bg-slate-800 dark:bg-slate-950">
            <FaGithub size={16} />
            GitHub
          </a>
        </div>
      </div>

      <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6">
        <h3 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
          Send a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" placeholder="Your Name" required className="w-full text-sm font-body px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full text-sm font-body px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500" />
          <input type="text" name="subject" placeholder="Subject" required className="w-full text-sm font-body px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500" />
          <textarea name="message" placeholder="Your Message" required rows={4} className="w-full text-sm font-body px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500" />

          <button type="submit" disabled={status === 'sending'} className="w-full bg-navy dark:bg-mint text-white dark:text-slate-900 text-sm font-body font-medium py-2.5 rounded-lg disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm font-body text-emerald-600 dark:text-emerald-400">Message sent — thanks for reaching out!</p>
          )}
          {status === 'error' && (
            <p className="text-sm font-body text-red-500">Something went wrong. Please try again or email me directly.</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
