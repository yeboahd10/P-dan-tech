function ServicesSection({ services }) {
  return (
    <section id="services" className="mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">Our Expertise</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Full-spectrum tech and design services under one roof.</h2>
        </div>
        <p className="max-w-xl text-slate-300">
          Every solution is shaped around usability, performance, and strong visual communication so your business can stand out and scale with confidence.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`animate-fade-up rounded-[2rem] border border-white/10 bg-gradient-to-b ${service.accent} p-6 shadow-lg shadow-slate-950/40`}
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg font-semibold text-cyan-200">
              {service.title
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection