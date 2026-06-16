import { useMemo } from 'react'
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Download,
} from 'lucide-react'

type RiskLevel = 'High' | 'Medium' | 'Low'
type RiskCategory = 'User' | 'Device' | 'Ticket'

type RiskItem = {
  item: string
  category: RiskCategory
  risk: RiskLevel
  reason: string
  suggestedAction: string
}

type RiskBadgeProps = {
  level: RiskLevel
}

type SummaryCard = {
  level: RiskLevel
  icon: typeof AlertTriangle
  cardClassName: string
  iconClassName: string
  countClassName: string
  descriptionClassName: string
  description: string
}

const riskItems: RiskItem[] = [
  {
    item: 'John Carter',
    category: 'User',
    risk: 'High',
    reason: 'No login in 45+ days',
    suggestedAction: 'Disable account immediately',
  },
  {
    item: 'Emily Chen',
    category: 'User',
    risk: 'High',
    reason: 'No login in 52 days, Finance dept access',
    suggestedAction: 'Disable account and audit access',
  },
  {
    item: 'LAPTOP-047',
    category: 'Device',
    risk: 'High',
    reason: 'Non-compliant, no check-in for 53 days',
    suggestedAction: 'Force compliance scan or decommission',
  },
  {
    item: 'LAPTOP-023',
    category: 'Device',
    risk: 'High',
    reason: 'Non-compliant, assigned to inactive user',
    suggestedAction: 'Revoke network access',
  },
  {
    item: 'TKT-1042',
    category: 'Ticket',
    risk: 'High',
    reason: 'Overdue, critical priority, exec impact',
    suggestedAction: 'Escalate to L3 and management',
  },
  {
    item: 'TKT-1014',
    category: 'Ticket',
    risk: 'High',
    reason: 'Critical patch deployment failure, overdue',
    suggestedAction: 'Emergency response team involvement',
  },
  {
    item: 'Sarah Lim',
    category: 'User',
    risk: 'Medium',
    reason: 'Inactive for 27 days, HR dept',
    suggestedAction: 'Send re-activation notice',
  },
  {
    item: 'David Kim',
    category: 'User',
    risk: 'Medium',
    reason: 'Inactive for 34 days',
    suggestedAction: 'Send re-activation notice',
  },
  {
    item: 'DESKTOP-112',
    category: 'Device',
    risk: 'Medium',
    reason: 'Non-compliant, patch overdue by 30 days',
    suggestedAction: 'Schedule compliance update',
  },
  {
    item: 'LAPTOP-064',
    category: 'Device',
    risk: 'Medium',
    reason: 'Non-compliant, last check-in 26 days ago',
    suggestedAction: 'Force software update',
  },
  {
    item: 'TKT-1028',
    category: 'Ticket',
    risk: 'Medium',
    reason: 'License expiry approaching, unresolved',
    suggestedAction: 'Assign and prioritize renewal',
  },
  {
    item: 'TKT-1019',
    category: 'Ticket',
    risk: 'Medium',
    reason: 'Storage quota critical, blocking operations',
    suggestedAction: 'Expand quota or archive data',
  },
  {
    item: 'Mark Torres',
    category: 'User',
    risk: 'Low',
    reason: 'Active, recent login',
    suggestedAction: 'No action required',
  },
  {
    item: 'TABLET-008',
    category: 'Device',
    risk: 'Low',
    reason: 'Compliant, regular check-ins',
    suggestedAction: 'No action required',
  },
  {
    item: 'TKT-1031',
    category: 'Ticket',
    risk: 'Low',
    reason: 'Low priority, non-blocking',
    suggestedAction: 'Schedule routine maintenance',
  },
]

const summaryCards: SummaryCard[] = [
  {
    level: 'High',
    icon: AlertTriangle,
    cardClassName: 'border-red-100 bg-red-50',
    iconClassName: 'text-red-500',
    countClassName: 'text-red-700',
    descriptionClassName: 'text-red-600 text-xs',
    description:
      'High Risk — Immediate action required. These items pose a critical threat to security or operations.',
  },
  {
    level: 'Medium',
    icon: AlertCircle,
    cardClassName: 'border-amber-100 bg-amber-50',
    iconClassName: 'text-amber-500',
    countClassName: 'text-amber-700',
    descriptionClassName: 'text-amber-600 text-xs',
    description:
      'Medium Risk — Monitor and address within 7 days. Potential to escalate if ignored.',
  },
  {
    level: 'Low',
    icon: CheckCircle,
    cardClassName: 'border-green-100 bg-green-50',
    iconClassName: 'text-green-500',
    countClassName: 'text-green-700',
    descriptionClassName: 'text-green-600 text-xs',
    description: 'Low Risk — Routine monitoring. No immediate action required.',
  },
]

const riskBadgeStyles: Record<RiskLevel, string> = {
  High: 'border-red-200 bg-red-100 text-red-700',
  Medium: 'border-amber-200 bg-amber-100 text-amber-700',
  Low: 'border-green-200 bg-green-100 text-green-700',
}

const tableColumns = [
  'Item',
  'Category',
  'Risk Level',
  'Reason',
  'Suggested Action',
]

function exportRiskReportCsv(items: RiskItem[]) {
  const rows = [
    ['Item', 'Category', 'Risk Level', 'Reason', 'Suggested Action'],
    ...items.map((item) => [
      item.item,
      item.category,
      item.risk,
      item.reason,
      item.suggestedAction,
    ]),
  ]
  const csv = rows
    .map((row) =>
      row
        .map((cell) => `"${cell.replaceAll('"', '""')}"`)
        .join(','),
    )
    .join('\n')
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = objectUrl
  link.download = 'opsinsight-risk-report.csv'
  link.click()
  URL.revokeObjectURL(objectUrl)
}

export function RiskBadge({ level }: RiskBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${riskBadgeStyles[level]}`}
    >
      {level}
    </span>
  )
}

export function RiskReportPage() {
  const riskCounts = useMemo(
    () =>
      riskItems.reduce(
        (counts, item) => ({
          ...counts,
          [item.risk]: counts[item.risk] + 1,
        }),
        { High: 0, Medium: 0, Low: 0 } satisfies Record<RiskLevel, number>,
      ),
    [],
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
            Risk Report
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Consolidated risk assessment across users, devices, and tickets.
          </p>
        </div>

        <button
          type="button"
          onClick={() => exportRiskReportCsv(riskItems)}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span>Export Report</span>
        </button>
      </div>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {summaryCards.map(
          ({
            level,
            icon: Icon,
            cardClassName,
            iconClassName,
            countClassName,
            descriptionClassName,
            description,
          }) => (
            <article
              key={level}
              className={`rounded-xl border p-4 ${cardClassName}`}
            >
              <div className="flex items-start gap-3">
                <Icon
                  className={`mt-0.5 h-5 w-5 ${iconClassName}`}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className={`text-3xl font-semibold tracking-tight ${countClassName}`}
                  >
                    {riskCounts[level]}
                  </p>
                  <p className={`mt-2 ${descriptionClassName}`}>
                    {description}
                  </p>
                </div>
              </div>
            </article>
          ),
        )}
      </section>

      <section className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-50">
            <thead className="bg-gray-50">
              <tr>
                {tableColumns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 bg-white">
              {riskItems.map((item) => (
                <tr
                  key={`${item.category}-${item.item}`}
                  className="transition-colors hover:bg-gray-50/50"
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-950">
                    {item.item}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                    {item.category}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <RiskBadge level={item.risk} />
                  </td>
                  <td className="min-w-64 px-6 py-4 text-sm text-gray-600">
                    {item.reason}
                  </td>
                  <td className="min-w-64 px-6 py-4 text-sm text-gray-600">
                    {item.suggestedAction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
