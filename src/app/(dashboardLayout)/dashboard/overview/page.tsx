import { ActiveUsersChart } from "@/components/dashboard/active-users-chart";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MetricsCards } from "@/components/dashboard/metrics-cards";
import { NewUsersTable } from "@/components/dashboard/new-users-table";
import { QuestionOverview } from "@/components/dashboard/question-overview";
import { TopInspiration } from "@/components/dashboard/top-inspiration";


export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 space-y-6">
          <MetricsCards/>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <QuestionOverview />
            </div>
            <div>
              <TopInspiration />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <NewUsersTable />
            <ActiveUsersChart />
          </div>
        </main>
      </div>
    </div>
  )
}
