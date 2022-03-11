import React from 'react'
import LeftPane from '../components/LeftPane'
import KingdomContainer from '../components/features/kingdom/KingdomContainer'
import Dealer from '../components/features/pokerGame/Dealer'
import SuitDisplay from '../components/features/resourceDisplays/SuitDisplay'

function App() {
  return (
    <>
      <LeftPane />
      <KingdomContainer />
      <Dealer />
      <SuitDisplay />
    </>
  )
}

export default App