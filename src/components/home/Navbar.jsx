import { useState } from 'react'

function Navbar({ logo }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ['Services', '#services'],
    ['Portfolio', '#portfolio'],
    ['About', '#about'],
    ['Testimonials', '#testimonials'],
    ['Contact', '#contact'],
  ]

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="P-DAN TECHNOLOGIES logo"
          className="h-12 w-12 rounded-2xl border border-cyan-400/30 object-cover shadow-lg shadow-cyan-500/20"
        />
        <div>
          <p className="text-lg font-semibold tracking-[0.25em] text-cyan-300">P-DAN</p>
          <p className="text-xs uppercase tracking-[0.45em] text-slate-300">Technologies</p>
        </div>
      </div>

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
        {links.map(([label, href]) => (
          <a key={label} href={href} className="transition hover:text-cyan-300">
            {label}
          </a>
        ))}
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <a
          href="#contact"
          className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
        >
          Start a Project
        </a>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex md:hidden flex-col gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-6 bg-cyan-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`h-0.5 w-6 bg-cyan-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-6 bg-cyan-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/50 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed inset-x-0 top-20 z-[9999] flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-800 transition hover:text-cyan-600"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full border border-cyan-400 bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-cyan-500"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project
          </a>
        </div>
        </>
      )}
    </nav>
  )
}

export default Navbar