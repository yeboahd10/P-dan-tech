import { useEffect, useState } from 'react'

function Navbar({ logo }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  const links = [
    ['Services', '#services'],
    ['Portfolio', '#portfolio'],
    ['About', '#about'],
    ['Testimonials', '#testimonials'],
    ['Contact', '#contact'],
  ]

  return (
    <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
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
        className="relative z-50 flex flex-col gap-1.5 md:hidden"
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-6 bg-cyan-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`h-0.5 w-6 bg-cyan-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`h-0.5 w-6 bg-cyan-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black px-6 pb-8 pt-24 md:hidden">
          <div className="mb-4 flex items-center justify-between border-b border-slate-700 pb-3">
            <p className="text-sm font-semibold tracking-[0.2em] text-white">MENU</p>
            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-slate-500 px-3 py-1 text-xs font-semibold text-white"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-2xl border border-slate-700 bg-black px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-300 hover:text-cyan-300"
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
        </div>
      )}
    </nav>
  )
}

export default Navbar