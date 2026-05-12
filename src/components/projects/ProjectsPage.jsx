import { Link } from 'react-router-dom'
import appLogo from '../../assets/log.png'

const projects = [
  {
    name: 'Spicards',
    platform: 'Android Solitaire Game',
    description:
      'A mobile Solitaire experience built for Android. Spicards supports email and password registration and includes in-app ads.',
    privacyPath: '/spicards/privacy-policy',
  },
]

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.2),_transparent_30%),radial-gradient(circle_at_80%_18%,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#020617_100%)]" />

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:py-14">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Projects</p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">Apps and products built under P-DAN Technologies.</h1>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              This page lists your published and active software projects. Each app can include its own privacy and support resources directly under the project entry.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
          >
            Back to Home
          </Link>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/40"
            >
              <div className="flex items-center gap-4">
                <img
                  src={appLogo}
                  alt={`${project.name} app icon`}
                  className="h-14 w-14 shrink-0 rounded-[1rem] border border-cyan-300/20 bg-slate-950 object-cover p-1 sm:h-16 sm:w-16"
                />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">Mobile App</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{project.name}</h2>
                  <p className="mt-1 text-sm text-slate-400">{project.platform}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="mt-6 rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Privacy and account help</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  View the privacy policy and submit an account deletion request for this app.
                </p>
                <Link
                  to={project.privacyPath}
                  className="mt-4 inline-flex items-center rounded-full border border-cyan-300 bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Open Privacy Policy
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default ProjectsPage