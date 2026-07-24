import { contact } from '../../data/contact'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
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
            <span className="w-9 h-9 rounded-full bg-navy dark:bg-mint flex items-center justify-center text-white dark:text-slate-900 text-xs shrink-0">@</span>
            {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200">
            <span className="w-9 h-9 rounded-full bg-navy dark:bg-mint flex items-center justify-center text-white dark:text-slate-900 text-xs shrink-0">T</span>
            {contact.phone}
          </a>
          <div className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200">
            <span className="w-9 h-9 rounded-full bg-navy dark:bg-mint flex items-center justify-center text-white dark:text-slate-900 text-xs shrink-0">L</span>
            {contact.location}
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-body font-medium border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 px-3 py-2 rounded-lg">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-xs font-body font-medium border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 px-3 py-2 rounded-lg">
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
          <button type="submit" className="w-full bg-navy dark:bg-mint text-white dark:text-slate-900 text-sm font-body font-medium py-2.5 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
