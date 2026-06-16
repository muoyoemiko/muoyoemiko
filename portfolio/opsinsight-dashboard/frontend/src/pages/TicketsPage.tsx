import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

type RiskLevel = 'High' | 'Medium' | 'Low'
type TicketPriority = 'Critical' | 'High' | 'Medium' | 'Low'
type TicketStatus = 'Overdue' | 'Open' | 'In Progress' | 'Resolved'

type TicketRecord = {
  ticketId: string
  title: string
  assignedUser: string
  priority: TicketPriority
  status: TicketStatus
  lastUpdated: string
  risk: RiskLevel
}

type RiskBadgeProps = {
  level: RiskLevel
}

const priorityOptions = ['All', 'Critical', 'High', 'Medium', 'Low'] as const
const statusOptions = [
  'All',
  'Overdue',
  'Open',
  'In Progress',
  'Resolved',
] as const
const riskOptions = ['All', 'High', 'Medium', 'Low'] as const

const tickets: TicketRecord[] = [
  {
    ticketId: 'TKT-1042',
    title: 'VPN access failure - exec team',
    assignedUser: 'Laura Green',
    priority: 'Critical',
    status: 'Overdue',
    lastUpdated: '2024-11-01',
    risk: 'High',
  },
  {
    ticketId: 'TKT-1038',
    title: 'Payroll system login error',
    assignedUser: 'David Kim',
    priority: 'High',
    status: 'Open',
    lastUpdated: '2024-11-02',
    risk: 'High',
  },
  {
    ticketId: 'TKT-1035',
    title: 'Email sync not working - HR dept',
    assignedUser: 'Mark Torres',
    priority: 'Medium',
    status: 'In Progress',
    lastUpdated: '2024-11-03',
    risk: 'Medium',
  },
  {
    ticketId: 'TKT-1031',
    title: 'Printer offline - Floor 3',
    assignedUser: 'Nina Osei',
    priority: 'Low',
    status: 'Open',
    lastUpdated: '2024-11-04',
    risk: 'Low',
  },
  {
    ticketId: 'TKT-1028',
    title: 'Software license expiry warning',
    assignedUser: 'Ryan Patel',
    priority: 'High',
    status: 'Open',
    lastUpdated: '2024-10-30',
    risk: 'Medium',
  },
  {
    ticketId: 'TKT-1024',
    title: 'MFA setup request - new hire batch',
    assignedUser: 'Emily Chen',
    priority: 'Medium',
    status: 'Resolved',
    lastUpdated: '2024-10-28',
    risk: 'Low',
  },
  {
    ticketId: 'TKT-1019',
    title: 'Storage quota exceeded - Legal shared drive',
    assignedUser: 'John Carter',
    priority: 'Medium',
    status: 'In Progress',
    lastUpdated: '2024-11-01',
    risk: 'Medium',
  },
  {
    ticketId: 'TKT-1014',
    title: 'Critical patch deployment failure',
    assignedUser: 'Sarah Lim',
    priority: 'Critical',
    status: 'Overdue',
    lastUpdated: '2024-10-25',
    risk: 'High',
  },
]

const riskBadgeStyles: Record<RiskLevel, string> = {
  High: 'border-red-200 bg-red-100 text-red-700',
  Medium: 'border-amber-200 bg-amber-100 text-amber-700',
  Low: 'border-green-200 bg-green-100 text-green-700',
}

const priorityBadgeStyles: Record<TicketPriority, string> = {
  Critical: 'bg-red-50 text-red-700',
  High: 'bg-orange-50 text-orange-700',
  Medium: 'bg-amber-50 text-amber-700',
  Low: 'bg-gray-100 text-gray-600',
}

const statusBadgeStyles: Record<TicketStatus, string> = {
  Overdue: 'bg-red-50 text-red-700',
  Open: 'bg-blue-50 text-blue-700',
  'In Progress': 'bg-indigo-50 text-indigo-700',
  Resolved: 'bg-green-50 text-green-700',
}

const tableColumns = [
  'Ticket ID',
  'Title',
  'Assigned User',
  'Priority',
  'Status',
  'Last Updated',
  'Risk Level',
]

export function RiskBadge({ level }: RiskBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${riskBadgeStyles[level]}`}
    >
      {level}
    </span>
  )
}

export function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [riskFilter, setRiskFilter] = useState('All')

  const filteredTickets = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()

    return tickets.filter((ticket) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        ticket.ticketId.toLowerCase().includes(normalizedSearch) ||
        ticket.title.toLowerCase().includes(normalizedSearch)
      const matchesPriority =
        priorityFilter === 'All' || ticket.priority === priorityFilter
      const matchesStatus =
        statusFilter === 'All' || ticket.status === statusFilter
      const matchesRisk = riskFilter === 'All' || ticket.risk === riskFilter

      return matchesSearch && matchesPriority && matchesStatus && matchesRisk
    })
  }, [priorityFilter, riskFilter, searchQuery, statusFilter])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
          Ticket SLA Tracking
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Monitor open tickets and escalate overdue or high-priority issues.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="relative block w-56">
          <span className="sr-only">Search tickets</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search tickets"
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none"
          />
        </label>

        <label>
          <span className="sr-only">Priority</span>
          <select
            value={priorityFilter}
            onChange={(event) => setPriorityFilter(event.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none"
          >
            {priorityOptions.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="sr-only">Status</span>
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="sr-only">Risk Level</span>
          <select
            value={riskFilter}
            onChange={(event) => setRiskFilter(event.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none"
          >
            {riskOptions.map((risk) => (
              <option key={risk} value={risk}>
                {risk}
              </option>
            ))}
          </select>
        </label>
      </div>

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
              {filteredTickets.length > 0 ? (
                filteredTickets.map((ticket) => (
                  <tr
                    key={ticket.ticketId}
                    className="transition-colors hover:bg-gray-50/50"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-xs font-medium text-blue-600">
                      {ticket.ticketId}
                    </td>
                    <td className="max-w-xs truncate px-6 py-4 text-sm text-gray-800">
                      {ticket.title}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {ticket.assignedUser}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${priorityBadgeStyles[ticket.priority]}`}
                      >
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${statusBadgeStyles[ticket.status]}`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {ticket.lastUpdated}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <RiskBadge level={ticket.risk} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={tableColumns.length}
                    className="px-6 py-12 text-center text-sm text-gray-400"
                  >
                    No tickets match the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
