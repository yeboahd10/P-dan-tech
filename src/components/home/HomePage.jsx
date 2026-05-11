import logo from '../../assets/LOGO.jpg'
import heroImage from '../../assets/hero.png'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import PortfolioSection from './PortfolioSection'
import ServicesSection from './ServicesSection'
import TestimonialsSection from './TestimonialsSection'

const metrics = [
  ['12+', 'Projects delivered'],
  ['3 Core', 'Specialty tracks'],
  ['24/7', 'Reliable support'],
]

const specialties = ['Web Development', 'Software Development', 'Graphic Design']

const services = [
  {
    title: 'Web Development',
    description: 'Responsive websites, landing pages, e-commerce stores, and web platforms engineered for speed and conversion.',
    accent: 'from-cyan-400/20 to-blue-500/20',
  },
  {
    title: 'Software Development',
    description: 'Custom business software, workflow tools, dashboards, and scalable systems tailored to operational needs.',
    accent: 'from-emerald-400/20 to-cyan-500/20',
  },
  {
    title: 'Graphic Design',
    description: 'Brand identity, marketing assets, product visuals, and digital creatives that make your message memorable.',
    accent: 'from-blue-500/20 to-fuchsia-500/20',
  },
]

const strengths = [
  ['Responsive by default', 'Interfaces built to feel reliable on mobile, tablet, and desktop.'],
  ['Modern stack', 'Fast frontends and maintainable systems shaped around current web standards.'],
  ['Design precision', 'Visual assets and brand materials aligned with your digital presence.'],
  ['Business-minded delivery', 'Solutions planned around real workflows, timelines, and growth goals.'],
]

const portfolioItems = [
  {
    title: 'Nova Commerce Platform',
    category: 'Web Development',
    summary: 'A conversion-focused storefront with fast product discovery, mobile checkout, and campaign landing pages.',
  },
  {
    title: 'PulseOps Dashboard',
    category: 'Software Development',
    summary: 'An internal operations suite for tracking workflows, team performance, and daily reporting across departments.',
  },
  {
    title: 'Vector Brand System',
    category: 'Graphic Design',
    summary: 'A visual identity package with social templates, ad creatives, and launch assets for a growing tech brand.',
  },
]

const testimonials = [
  {
    quote: 'P-DAN TECHNOLOGIES gave our business a cleaner online presence and a much stronger product story. The turnaround was fast and the finish was sharp.',
    name: 'Ama Mensah',
    role: 'Founder, Nova Retail',
  },
  {
    quote: 'Their team translated our workflow problems into a tool people actually wanted to use. That balance of design and engineering is rare.',
    name: 'Daniel Kwarteng',
    role: 'Operations Lead, PulseOps',
  },
  {
    quote: 'We needed branding that felt modern and credible. P-DAN delivered visuals that instantly improved how clients perceived us.',
    name: 'Esi Boateng',
    role: 'Marketing Manager, Vector Labs',
  },
]

const contactLinks = {
  email: 'yeboahd10@gmail.com',
  phone: '+233556665774',
  socials: [
    {
      label: 'TikTok',
      handle: '@P-Dan Technologies',
      href: 'https://www.tiktok.com/@P-Dan%20Technologies',
    },
    {
      label: 'Facebook',
      handle: '@P-Dan Technologies',
      href: 'https://www.facebook.com/P-Dan%20Technologies',
    },
  ],
}

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.22),_transparent_32%),radial-gradient(circle_at_85%_18%,_rgba(59,130,246,0.2),_transparent_26%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#020617_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />

        <header className="relative z-10">
          <Navbar logo={logo} />
        </header>

        <main className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-10">
          <div className="hidden sm:block">
            <HeroSection
              heroImage={heroImage}
              metrics={metrics}
              specialties={specialties}
            />
          </div>
          <ServicesSection services={services} />
          <div className="hidden sm:block">
            <PortfolioSection portfolioItems={portfolioItems} />
          </div>
          <AboutSection strengths={strengths} />
          <div className="hidden sm:block">
            <TestimonialsSection testimonials={testimonials} />
          </div>
          <ContactSection contactLinks={contactLinks} />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default HomePage