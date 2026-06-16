import {
  ArrowRight,
  FileBarChart2,
  Monitor,
  Shield,
  Ticket,
} from 'lucide-react'
import { FeatureCard } from '../components/FeatureCard'

type LandingPageProps = {
  onViewDashboard?: () => void
  onUploadData?: () => void
}

const features = [
  {
    icon: Shield,
    iconColor: 'text-blue-600',
    title: 'User Risk Review',
    description:
      'Identify inactive users and access anomalies before they become threats.',
  },
  {
    icon: Monitor,
    iconColor: 'text-teal-600',
    title: 'Device Compliance',
    description:
      'Track device check-ins and flag non-compliant endpoints instantly.',
  },
  {
    icon: Ticket,
    iconColor: 'text-indigo-600',
    title: 'Ticket SLA Tracking',
    description:
      'Monitor open tickets and escalate high-priority issues before SLA breach.',
  },
  {
    icon: FileBarChart2,
    iconColor: 'text-purple-600',
    title: 'Risk Reporting',
    description:
      'Generate a consolidated risk report across users, devices, and tickets.',
  },
]

export function LandingPage({
  onViewDashboard,
  onUploadData,
}: LandingPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-950">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            OpsInsight
          </span>
        </div>

        <button
          type="button"
          onClick={onViewDashboard}
          className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-blue-600 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"
        >
          View Dashboard
        </button>
      </nav>

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-16 pt-16 text-center sm:pt-24 lg:px-8">
        <div className="rounded-full border border-blue-100 bg-white px-4 py-1.5 text-sm font-medium text-blue-600 shadow-sm">
          IT Operations Platform
        </div>

        <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          OpsInsight IT Automation Dashboard
        </h1>

        <p className="mt-6 text-xl font-semibold text-blue-600">
          Review user, device, and ticket risks from one place.
        </p>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          A full-stack dashboard that analyzes mock IT operations data and
          highlights inactive users, non-compliant devices, and high-priority
          support tickets.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onViewDashboard}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"
          >
            View Dashboard
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onUploadData}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"
          >
            Upload Data
          </button>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <footer className="px-6 pb-8 text-center text-sm text-slate-500">
        OpsInsight IT Automation Dashboard · Portfolio Project
      </footer>
    </main>
  )
}
