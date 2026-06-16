import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  iconColor: string
  title: string
  description: string
}

export function FeatureCard({
  icon: Icon,
  iconColor,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 ${iconColor}`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  )
}
