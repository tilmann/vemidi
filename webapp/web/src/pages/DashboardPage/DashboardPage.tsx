import { Link, routes } from '@redwoodjs/router'
import FlatCard from 'src/components/FlatCard'
import ActionCards from 'src/components/ActionCards'

const DashboardPage = () => {
  return (
    <>
     <div className="grid grid-cols-1 gap-4 lg:col-span-2">
        <FlatCard/>
        <ActionCards/>
     </div>
    </>
  )
}

export default DashboardPage
