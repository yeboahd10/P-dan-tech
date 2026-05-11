function ContactSection({ contactLinks }) {
  return (
    <section id="contact" className="mt-24">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 px-6 py-10 backdrop-blur lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200">Ready to Build</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Launch your next website, software product, or visual identity with P-DAN TECHNOLOGIES.</h2>
            <p className="mt-4 text-slate-200">
              Reach out directly by email, phone, or social platforms and we can start planning the right solution for your brand.
            </p>
          </div>

          <div className="flex max-w-2xl flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`mailto:${contactLinks.email}`}
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                {contactLinks.email}
              </a>
              <a
                href={`tel:${contactLinks.phone}`}
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {contactLinks.phone}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.5rem] border border-white/15 bg-slate-950/35 px-5 py-4 transition hover:border-cyan-300/40 hover:bg-slate-950/55"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">{social.label}</p>
                  <p className="mt-2 text-sm text-slate-200">{social.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection