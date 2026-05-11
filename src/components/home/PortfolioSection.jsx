function PortfolioSection({ portfolioItems }) {
  return (
    <section id="portfolio" className="mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A sample of the digital products and visuals we help shape.</h2>
        </div>
        <p className="max-w-xl text-slate-300">
          From customer-facing websites to internal systems and launch-ready branding, our work is built to solve real business problems.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <article
            key={item.title}
            className="animate-fade-up group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{item.category}</p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Case Study</span>
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
            <div className="mt-8 h-36 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.9),_rgba(2,6,23,0.95))] p-4">
              <div className="flex h-full items-end justify-between rounded-[1.2rem] border border-white/10 bg-slate-950/50 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">P-DAN Flow</p>
                  <p className="mt-2 text-sm text-slate-200">Research, design, build, refine.</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection