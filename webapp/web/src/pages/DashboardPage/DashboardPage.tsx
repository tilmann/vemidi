import React from 'react'
import ActionCards from 'src/components/Dashboard/ActionCards'
import FlatsCardsCell from 'src/components/FlatsCardsCell'

const DashboardPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <FlatsCardsCell />
        <ActionCards />
      </div>
    </>
  )
}

export default DashboardPage
