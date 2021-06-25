import ActionCards from 'src/components/Dashboard/ActionCards'
import FlatCard from 'src/components/Dashboard/FlatCard'

const DashboardPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        <FlatCard />
        <ActionCards />
      </div>
    </>
  )
}

export default DashboardPage
