import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import AreaExploration from './features/areaExploration/AreaExploration'
import DeckContainer from './features/deck/DeckContainer'
import KingdomContainer from './features/kingdom/KingdomContainer'


export default function RightPane() {
  return (
    <Tabs className='tabs'>
        <TabList className='tab-list'>
            <Tab className='tab'><img height={'40px'} src='assets/img/ui/tab-img-kingdom.png' alt='kingdom' /> Kingdom</Tab>
            <Tab className='tab'><img height={'40px'} src='assets/img/ui/tab-img-deck.png' alt='deck' /> Deck</Tab>
            <Tab className='tab'><img height={'40px'} src='assets/img/ui/tab-img-deck.png' alt='area exploration' /> Area Exploration</Tab>
        </TabList>
        <TabPanel><KingdomContainer /></TabPanel>
        <TabPanel><DeckContainer /></TabPanel>
        <TabPanel className='tab-panel'><AreaExploration /></TabPanel>
      </Tabs>
  )
}
