function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="mt-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">Client Feedback</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What clients value after working with P-DAN TECHNOLOGIES.</h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={testimonial.name}
            className="animate-fade-up rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <p className="text-lg leading-8 text-slate-100">"{testimonial.quote}"</p>
            <footer className="mt-8 border-t border-white/10 pt-5">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection