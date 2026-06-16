import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

type RiskLevel = 'High' | 'Medium' | 'Low'
type ComplianceStatus = 'Compliant' | 'Non-Compliant'

type DeviceRecord = {
  deviceName: string
  assignedUser: string
  complianceStatus: ComplianceStatus
  lastCheckIn: string
  risk: RiskLevel
}

type RiskBadgeProps = {
  level: RiskLevel
}

const complianceOptions = ['All', 'Compliant', 'Non-Compliant'] as const
const riskOptions = ['All', 'High', 'Medium', 'Low'] as const

const devices: DeviceRecord[] = [
  {
    deviceName: 'LAPTOP-047',
    assignedUser: 'Emily Chen',
    complianceStatus: 'Non-Compliant',
    lastCheckIn: '2024-09-18',
    risk: 'High',
  },
  {
    deviceName: 'DESKTOP-112',
    assignedUser: 'Ryan Patel',
    complianceStatus: 'Non-Compliant',
    lastCheckIn: '2024-10-02',
    risk: 'Medium',
  },
  {
    deviceName: 'LAPTOP-023',
    assignedUser: 'John Carter',
    complianceStatus: 'Non-Compliant',
    lastCheckIn: '2024-09-30',
    risk: 'High',
  },
  {
    deviceName: 'TABLET-008',
    assignedUser: 'Nina Osei',
    complianceStatus: 'Compliant',
    lastCheckIn: '2024-11-03',
    risk: 'Low',
  },
  {
    deviceName: 'LAPTOP-091',
    assignedUser: 'Mark Torres',
    complianceStatus: 'Compliant',
    lastCheckIn: '2024-11-04',
    risk: 'Low',
  },
  {
    deviceName: 'DESKTOP-055',
    assignedUser: 'Laura Green',
    complianceStatus: 'Compliant',
    lastCheckIn: '2024-11-05',
    risk: 'Low',
  },
  {
    deviceName: 'LAPTOP-064',
    assignedUser: 'David Kim',
    complianceStatus: 'Non-Compliant',
    lastCheckIn: '2024-10-10',
    risk: 'Medium',
  },
  {
    deviceName: 'TABLET-021',
    assignedUser: 'Sarah Lim',
    complianceStatus: 'Compliant',
    lastCheckIn: '2024-10-25',
    risk: 'Low',
  },
]

const riskBadgeStyles: Record<RiskLevel, string> = {
  High: 'border-red-200 bg-red-100 text-red-700',
  Medium: 'border-amber-200 bg-amber-100 text-amber-700',
  Low: 'border-green-200 bg-green-100 text-green-700',
}

const complianceBadgeStyles: Record<ComplianceStatus, string> = {
  Compliant: 'bg-green-50 text-green-700',
  'Non-Compliant': 'bg-red-50 text-red-700',
}

const tableColumns = [
  'Device Name',
  'Assigned User',
  'Compliance Status',
  'Last Check-In',
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

export function DevicesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [complianceFilter, setComplianceFilter] = useState('All')
  const [riskFilter, setRiskFilter] = useState('All')

  const filteredDevices = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()

    return devices.filter((device) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        device.deviceName.toLowerCase().includes(normalizedSearch) ||
        device.assignedUser.toLowerCase().includes(normalizedSearch)
      const matchesCompliance =
        complianceFilter === 'All' ||
        device.complianceStatus === complianceFilter
      const matchesRisk = riskFilter === 'All' || device.risk === riskFilter

      return matchesSearch && matchesCompliance && matchesRisk
    })
  }, [complianceFilter, riskFilter, searchQuery])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
          Device Compliance
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Track device compliance status and identify non-compliant endpoints.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <label className="relative block w-56">
          <span className="sr-only">Search devices</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search devices"
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none"
          />
        </label>

        <label>
          <span className="sr-only">Compliance Status</span>
          <select
            value={complianceFilter}
            onChange={(event) => setComplianceFilter(event.target.value)}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-400 focus:outline-none"
          >
            {complianceOptions.map((status) => (
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
              {filteredDevices.length > 0 ? (
                filteredDevices.map((device) => (
                  <tr
                    key={device.deviceName}
                    className="transition-colors hover:bg-gray-50/50"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-mono text-xs font-medium text-gray-800">
                      {device.deviceName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {device.assignedUser}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${complianceBadgeStyles[device.complianceStatus]}`}
                      >
                        {device.complianceStatus}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {device.lastCheckIn}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <RiskBadge level={device.risk} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={tableColumns.length}
                    className="px-6 py-12 text-center text-sm text-gray-400"
                  >
                    No devices match the current filters.
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
