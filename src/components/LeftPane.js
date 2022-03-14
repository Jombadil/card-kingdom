import React from 'react'
import CardDisplay from './features/resourceDisplays/CardDisplay'
import BigCard from './BigCard'
import ProducerContainer from './features/producers/ProducerContainer'
import HandDisplay from './features/pokerGame/HandDisplay'

export default function LeftPane() {
  return (
    <div className='left-pane'>
        <CardDisplay />
        <BigCard />

        <HandDisplay />

        <ProducerContainer />
    </div>
  )
}
