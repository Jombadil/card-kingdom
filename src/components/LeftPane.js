import React from 'react'
import CardDisplay from './features/resourceDisplays/CardDisplay'
import BigCard from './BigCard'
import ProducerContainer from './features/producers/ProducerContainer'
import HandDisplay from './features/pokerGame/HandDisplay'

export default function LeftPane() {
  return (
    <div style={{paddingBottom: '10px', width: '370px', border: '1px solid lightgray', backgroundColor: 'rgb(241, 241, 241)', boxShadow: '0 4px 8px rgba(0, 0, 0, .2)', borderRadius: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <CardDisplay />
        <BigCard />

        <HandDisplay />

        <ProducerContainer />
    </div>
  )
}
