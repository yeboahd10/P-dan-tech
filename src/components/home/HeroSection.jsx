import { useState } from 'react'

function HeroSection({ heroImage, metrics, specialties }) {

  return (
    <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="max-w-3xl">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur">
          <span className="animate-pulse-glow h-2 w-2 rounded-full bg-cyan-400" />
          Building digital products that look sharp and perform harder
        </div>

        <h1 className="animate-fade-up animation-delay-150 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          P-DAN TECHNOLOGIES delivers modern digital experiences for ambitious brands.
        </h1>

        <p className="animate-fade-up animation-delay-300 mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          We design, build, and refine web platforms, business software, and visual brand assets that help companies move faster and communicate clearly.
        </p>

        <div className="animate-fade-up animation-delay-450 mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#services"
            className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore Services
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-300/50 hover:bg-white/10"
          >
            View Portfolio
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {metrics.map(([value, label], index) => (
            <div
              key={label}
              className="animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              style={{ animationDelay: `${600 + index * 120}ms` }}
            >
              <p className="text-2xl font-semibold text-cyan-300">{value}</p>
              <p className="mt-1 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative animate-float">
        <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/25 blur-3xl" />

        <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
          <img
            src={heroImage}
            alt="Digital product showcase"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
          />

          <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/10 bg-slate-950/75 p-5 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Specialties</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {specialties.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection