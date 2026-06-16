import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

type RiskLevel = 'High' | 'Medium' | 'Low'
type UserStatus = 'Active' | 'Inactive'

type UserRecord = {
  name: string
  email: string
  department: string
  lastLogin: string
  status: UserStatus
  risk: RiskLevel
}

type RiskBadgeProps = {
  level: RiskLevel
}

const departmentOptions = [
  'All',
  'Engineering',
  'HR',
  'Sales',
  'Finance',
  'Legal',
  'Marketing',
  'IT Support',
] as const

const statusOptions = ['All', 'Active', 'Inactive'] as const
const riskOptions = ['All', 'High', 'Medium', 'Low'] as const

const users: UserRecord[] = [
  {
    name: 'John Carter',
    email: 'jcarter@corp.io',
    department: 'Engineering',
    lastLogin: '2024-10-01',
    status: 'Inactive',
    risk: 'High',
  },
  {
    name: 'Sarah Lim',
    email: 'slim@corp.io',
    department: 'HR',
    lastLogin: '2024-10-15',
    status: 'Inactive',
    risk: 'Medium',
  },
  {
    name: 'Mark Torres',
    email: 'mtorres@corp.io',
    department: 'Sales',
    lastLogin: '2024-11-02',
    status: 'Active',
    risk: 'Low',
  },
  {
    name: 'Emily Chen',
    email: 'echen@corp.io',
    department: 'Finance',
    lastLogin: '2024-09-20',
    status: 'Inactive',
    risk: 'High',
  },
  {
    name: 'Ryan Patel',
    email: 'rpatel@corp.io',
    department: 'Legal',
    lastLogin: '2024-11-05',
    status: 'Active',
    risk: 'Low',
  },
  {
    name: 'Nina Osei',
    email: 'nosei@corp.io',
    department: 'Marketing',
    lastLogin: '2024-10-28',
    status: 'Active',
    risk: 'Low',
  },
  {
    name: 'David Kim',
    email: 'dkim@corp.io',
    department: 'Engineering',
    lastLogin: '2024-10-08',
    status: 'Inactive',
    risk: 'Medium',
  },
  {
    name: 'Laura Green',
    email: 'lgreen@corp.io',
    department: 'IT Support',
    lastLogin: '2024-11-01',
    status: 'Active',
    risk: 'Low',
  },
]

const riskBadgeStyles: Record<RiskLevel, string> = {
  High: 'border-red-200 bg-red-100 text-red-700',
  Medium: 'border-amber-200 bg-amber-100 text-amber-700',
  Low: 'border-green-200 bg-green-100 text-green-700',
}

const statusBadgeStyles: Record<UserStatus, string> = {
  Active: 'bg-green-50 text-green-700',
  Inactive: 'bg-gray-100 text-gray-600',
}

const tableColumns = [
  'User Name',
  'Email',
  'Department',
  'Last Login',
  'Status',
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

export function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [riskFilter, setRiskFilter] = useState('All')

  const filteredUsers = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()

    return users.filter((user) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        user.name.toLowerCase().includes(normalizedSearch) ||
        user.email.toLowerCase().includes(normalizedSearch)
      const matchesDepartment =
        departmentFilter === 'All' || user.department === departmentFilter
      const matchesStatus =
        statusFilter === 'All' || user.status === statusFilter
      const matchesRisk = riskFilter === 'All' || user.risk === riskFilter

      return matchesSearch && matchesDepartment && matchesStatus && matchesRisk
    })
  }, [departmentFilter, riskFilter, searchQuery, statusFilter])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
          User Risk Review
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Monitor user activity and identify inactive or high-risk accounts.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="relative block w-56">
          <span className="sr-only">Search users</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search users"
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none"
          />
        </label>

        <label>
          <span className="sr-only">Department</span>
          <select
            value={departmentFilter}
            onChange={(event) => setDepartmentFilter(event.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none"
          >
            {departmentOptions.map((department) => (
              <option key={department} value={department}>
                {department}
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
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.email}
                    className="transition-colors hover:bg-gray-50/50"
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-950">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {user.department}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {user.lastLogin}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusBadgeStyles[user.status]}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <RiskBadge level={user.risk} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={tableColumns.length}
                    className="px-6 py-12 text-center text-sm text-gray-400"
                  >
                    No users match the current filters.
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
