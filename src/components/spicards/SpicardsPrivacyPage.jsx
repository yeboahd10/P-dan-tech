import { useState } from 'react'
import { Link } from 'react-router-dom'
import appLogo from '../../assets/log.png'

const supportEmail = 'yeboahd10@gmail.com'
const formName = 'spicards-account-deletion'

const policyHighlights = [
  {
    title: 'Information we collect',
    text: 'Spicards collects the email address and password you use when creating an account. The app may also receive technical device details, gameplay diagnostics, and ad-related identifiers from analytics and advertising partners.',
  },
  {
    title: 'How we use information',
    text: 'Your account details are used to create and secure your profile, support sign-in, maintain game progress where available, and respond to support requests. Ad and diagnostic data help us keep the Solitaire experience stable and improve performance.',
  },
  {
    title: 'Advertising',
    text: 'Spicards displays ads. Ad providers may process device identifiers, approximate location, and interaction data to deliver, limit, and measure advertisements in line with their own privacy policies.',
  },
  {
    title: 'Your choices',
    text: 'You can request access to your account information or ask for account deletion using the request form on this page. If you no longer want ads personalized to your device, review your Android advertising and privacy settings.',
  },
]

function SpicardsPrivacyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: '',
    details: '',
  })
  const [submitState, setSubmitState] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setSubmitState('submitting')
    setSubmitError('')

    try {
      const payload = new URLSearchParams({
        'form-name': formName,
        fullName: formData.fullName,
        email: formData.email,
        reason: formData.reason,
        details: formData.details,
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitState('success')
      setFormData({
        fullName: '',
        email: '',
        reason: '',
        details: '',
      })
    } catch {
      setSubmitState('error')
      setSubmitError('We could not submit your request right now. Please try again, or contact support directly.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.18),_transparent_32%),radial-gradient(circle_at_82%_20%,_rgba(59,130,246,0.18),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#0f172a_60%,_#020617_100%)]" />

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:py-14">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20"
            >
              <span aria-hidden="true">←</span>
              Back to Projects
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Home
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Spicards App</p>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/40 backdrop-blur-sm">
          <div className="border-b border-white/10 px-6 py-8 sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <img
                src={appLogo}
                alt="Spicards app logo"
                className="h-20 w-20 rounded-[1.5rem] border border-cyan-300/30 bg-slate-900/80 object-cover shadow-lg shadow-cyan-900/40"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Privacy Policy</p>
                <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Spicards Privacy Policy and Account Deletion</h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                  This page explains how Spicards, a Solitaire game for Android, handles personal information. The app includes advertisements and allows users to register with an email address and password.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
                <h2 className="text-xl font-semibold text-white">Policy Summary</h2>
                <div className="mt-5 grid gap-4">
                  {policyHighlights.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.25rem] border border-cyan-400/15 bg-slate-900/80 p-5"
                    >
                      <h3 className="text-base font-semibold text-cyan-200">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
                <h2 className="text-xl font-semibold text-white">Data Retention and Security</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We keep account information for as long as your Spicards account remains active or as needed to meet legal, security, fraud-prevention, and support obligations. We take reasonable steps to protect account information, but no internet-based service can guarantee absolute security.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  If you believe your account has been accessed without permission, contact us at <a className="text-cyan-300 underline decoration-cyan-500/50 underline-offset-4" href={`mailto:${supportEmail}`}>{supportEmail}</a>.
                </p>
              </section>
            </div>

            <section className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-6">
              <h2 className="text-xl font-semibold text-white">Account Deletion Request</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Use this form to request deletion of your Spicards account. Requests are submitted to a hosted form endpoint so they can be stored and processed after deployment on Netlify.
              </p>

              <form
                className="mt-6 space-y-4"
                name={formName}
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value={formName} />
                <input type="hidden" name="bot-field" />
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-cyan-100">Full name</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-cyan-100">Registered email address</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                    placeholder="name@example.com"
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-cyan-100">Reason for deletion</span>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
                  >
                    <option value="">Select a reason</option>
                    <option value="No longer using the app">No longer using the app</option>
                    <option value="Privacy concerns">Privacy concerns</option>
                    <option value="Created another account">Created another account</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-cyan-100">Additional details</span>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows="5"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                    placeholder="Add anything that will help us identify your account or process the request."
                  />
                </label>

                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="w-full rounded-full border border-cyan-300 bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {submitState === 'submitting' ? 'Submitting Request...' : 'Submit Deletion Request'}
                </button>
              </form>

              {submitState === 'success' && (
                <div className="mt-4 rounded-[1.25rem] border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm leading-7 text-emerald-100">
                  Your request was submitted successfully. We will review it and respond through your registered email address.
                </div>
              )}

              {submitState === 'error' && (
                <div className="mt-4 rounded-[1.25rem] border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-7 text-amber-100">
                  {submitError}
                </div>
              )}

              <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-4 text-sm leading-7 text-slate-300">
                <p>
                  If form submission is temporarily unavailable, contact <a className="text-cyan-300 underline decoration-cyan-500/50 underline-offset-4" href={`mailto:${supportEmail}`}>{supportEmail}</a> using the email address linked to your Spicards account.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SpicardsPrivacyPage