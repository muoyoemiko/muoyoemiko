import type { ReactNode } from 'react'
import {
  Bell,
  FileBarChart2,
  LayoutDashboard,
  Monitor,
  Search,
  Ticket,
  Upload,
  Users,
} from 'lucide-react'
import { DevicesPage } from './DevicesPage'
import { RiskReportPage } from './RiskReportPage'
import { TicketsPage } from './TicketsPage'
import { UploadPage } from './UploadPage'
import { UsersPage } from './UsersPage'

type RiskLevel = 'High' | 'Medium' | 'Low'
type DashboardSection =
  | 'Dashboard'
  | 'Users'
  | 'Devices'
  | 'Tickets'
  | 'Risk Report'
  | 'Upload Data'

type RiskBadgeProps = {
  level: RiskLevel
}

type MetricCardProps = {
  label: string
  value: number
  accent?: boolean
  icon?: ReactNode
}

type SidebarProps = {
  currentPage: DashboardSection
  onNavigate?: (page: DashboardSection) => void
}

type PageHeaderProps = {
  title: string
}

type DashboardPageProps = {
  currentPage: DashboardSection
  onNavigate?: (page: DashboardSection) => void
}

type SidebarItem = {
  label: string
  icon: typeof LayoutDashboard
  page?: DashboardSection
}

type RecentRiskItem = {
  name: string
  type: string
  department: string
  status: string
  risk: RiskLevel
  suggestedAction: string
}

const sidebarItems: readonly SidebarItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard, page: 'Dashboard' },
  { label: 'Users', icon: Users, page: 'Users' },
  { label: 'Devices', icon: Monitor, page: 'Devices' },
  { label: 'Tickets', icon: Ticket, page: 'Tickets' },
  { label: 'Risk Report', icon: FileBarChart2, page: 'Risk Report' },
  { label: 'Upload Data', icon: Upload, page: 'Upload Data' },
]

const metrics = [
  { label: 'Total Users', value: 128 },
  { label: 'Inactive Users', value: 14, accent: true },
  { label: 'Non-Compliant Devices', value: 9, accent: true },
  { label: 'Open Tickets', value: 23, accent: true },
  { label: 'High Risk Items', value: 7, accent: true },
]

const recentRiskItems: readonly RecentRiskItem[] = [
  {
    name: 'John Carter',
    type: 'User',
    department: 'Engineering',
    status: 'Inactive',
    risk: 'High',
    suggestedAction: 'Disable account',
  },
  {
    name: 'LAPTOP-047',
    type: 'Device',
    department: 'Finance',
    status: 'Non-Compliant',
    risk: 'High',
    suggestedAction: 'Force compliance scan',
  },
  {
    name: 'TKT-1042',
    type: 'Ticket',
    department: 'IT Support',
    status: 'Overdue',
    risk: 'High',
    suggestedAction: 'Escalate immediately',
  },
  {
    name: 'Sarah Lim',
    type: 'User',
    department: 'HR',
    status: 'Inactive',
    risk: 'Medium',
    suggestedAction: 'Send re-activation notice',
  },
  {
    name: 'DESKTOP-112',
    type: 'Device',
    department: 'Legal',
    status: 'Non-Compliant',
    risk: 'Medium',
    suggestedAction: 'Schedule update',
  },
  {
    name: 'TKT-1038',
    type: 'Ticket',
    department: 'Finance',
    status: 'Open',
    risk: 'Medium',
    suggestedAction: 'Assign to L2 support',
  },
  {
    name: 'Mark Torres',
    type: 'User',
    department: 'Sales',
    status: 'Active',
    risk: 'Low',
    suggestedAction: 'Monitor',
  },
  {
    name: 'TABLET-008',
    type: 'Device',
    department: 'Marketing',
    status: 'Compliant',
    risk: 'Low',
    suggestedAction: 'No action needed',
  },
]

const riskBadgeStyles: Record<RiskLevel, string> = {
  High: 'border-red-200 bg-red-100 text-red-700',
  Medium: 'border-amber-200 bg-amber-100 text-amber-700',
  Low: 'border-green-200 bg-green-100 text-green-700',
}

export function RiskBadge({ level }: RiskBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${riskBadgeStyles[level]}`}
    >
      {level}
    </span>
  )
}

export function MetricCard({
  label,
  value,
  accent = false,
  icon,
}: MetricCardProps) {
  return (
    <article
      className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${
        accent ? 'border-l-4 border-l-blue-600' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-gray-950">
            {value}
          </p>
        </div>
        {icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            {icon}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-56 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-14 items-center gap-3 border-b border-gray-200 px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
        </div>
        <span className="text-base font-semibold tracking-tight text-gray-950">
          OpsInsight
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {sidebarItems.map(({ label, icon: Icon, page }) => {
          const isActive = currentPage === page

          return (
            <button
              key={label}
              type="button"
              onClick={() => {
                if (page) {
                  onNavigate?.(page)
                }
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
      <h1 className="text-base font-semibold text-gray-950">{title}</h1>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <Bell className="h-4 w-4" aria-hidden="true" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
          IT
        </div>
      </div>
    </header>
  )
}

export function DashboardPage({ currentPage, onNavigate }: DashboardPageProps) {
  const isDashboard = currentPage === 'Dashboard'
  const pageTitle =
    currentPage === 'Dashboard'
      ? 'OpsInsight Dashboard'
      : currentPage === 'Users'
        ? 'User Risk Review'
        : currentPage === 'Devices'
          ? 'Device Compliance'
          : currentPage === 'Tickets'
            ? 'Ticket SLA Tracking'
            : currentPage === 'Risk Report'
              ? 'Risk Report'
              : 'Upload Data'

  return (
    <div className="min-h-screen bg-gray-50 text-gray-950">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />

      <div className="min-h-screen pl-56">
        <PageHeader title={pageTitle} />

        <main className="h-[calc(100vh-3.5rem)] overflow-y-auto px-6 py-8">
          <div className="mx-auto max-w-7xl">
            {isDashboard ? (
              <>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                    Dashboard Overview
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Summary of IT operations risk indicators.
                  </p>
                </div>

                <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                  ))}
                </section>

                <section className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 px-6 py-4">
                    <h3 className="text-base font-semibold text-gray-950">
                      Recent Risk Items
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-50">
                      <thead className="bg-gray-50">
                        <tr>
                          {[
                            'Name',
                            'Type',
                            'Department',
                            'Status',
                            'Risk Level',
                            'Suggested Action',
                          ].map((column) => (
                            <th
                              key={column}
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-semibold uppercase text-gray-500"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50 bg-white">
                        {recentRiskItems.map((item) => (
                          <tr
                            key={`${item.type}-${item.name}`}
                            className="transition hover:bg-gray-50"
                          >
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-950">
                              {item.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                              {item.type}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                              {item.department}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                              {item.status}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                              <RiskBadge level={item.risk} />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                              {item.suggestedAction}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </>
            ) : currentPage === 'Users' ? (
              <UsersPage />
            ) : currentPage === 'Devices' ? (
              <DevicesPage />
            ) : currentPage === 'Tickets' ? (
              <TicketsPage />
            ) : currentPage === 'Risk Report' ? (
              <RiskReportPage />
            ) : (
              <UploadPage />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
