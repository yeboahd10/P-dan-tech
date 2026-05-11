function AboutSection({ strengths }) {
  return (
    <section id="about" className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">Why Work With Us</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">A practical team focused on quality, clarity, and execution.</h2>
        <p className="mt-5 text-slate-300">
          P-DAN TECHNOLOGIES combines technical depth with polished design thinking so clients do not have to split strategy, build, and branding across separate vendors.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {strengths.map(([title, description], index) => (
          <div
            key={title}
            className="animate-fade-up rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection