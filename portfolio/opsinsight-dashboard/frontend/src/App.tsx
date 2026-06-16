import { useState } from 'react'
import { LandingPage } from './pages/LandingPage'
import { DashboardPage } from './pages/DashboardPage'

type AppPage =
  | 'landing'
  | 'dashboard'
  | 'users'
  | 'devices'
  | 'tickets'
  | 'risk-report'
  | 'upload'

type DashboardLabel =
  | 'Dashboard'
  | 'Users'
  | 'Devices'
  | 'Tickets'
  | 'Risk Report'
  | 'Upload Data'

function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('landing')

  const handleNavigate = (label: DashboardLabel) => {
    if (label === 'Users') {
      setCurrentPage('users')
      return
    }

    if (label === 'Devices') {
      setCurrentPage('devices')
      return
    }

    if (label === 'Tickets') {
      setCurrentPage('tickets')
      return
    }

    if (label === 'Risk Report') {
      setCurrentPage('risk-report')
      return
    }

    if (label === 'Upload Data') {
      setCurrentPage('upload')
      return
    }

    setCurrentPage('dashboard')
  }

  if (currentPage !== 'landing') {
    return (
      <DashboardPage
        currentPage={
          currentPage === 'users'
            ? 'Users'
            : currentPage === 'devices'
              ? 'Devices'
              : currentPage === 'tickets'
                ? 'Tickets'
                : currentPage === 'risk-report'
                  ? 'Risk Report'
                  : currentPage === 'upload'
                    ? 'Upload Data'
                    : 'Dashboard'
        }
        onNavigate={handleNavigate}
      />
    )
  }

  return (
    <LandingPage
      onViewDashboard={() => setCurrentPage('dashboard')}
      onUploadData={() => setCurrentPage('upload')}
    />
  )
}

export default App
