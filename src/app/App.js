import React from 'react'
import LeftPane from '../components/LeftPane'
import KingdomContainer from '../components/features/kingdom/KingdomContainer'
import Dealer from '../components/features/pokerGame/Dealer'
import SuitDisplay from '../components/features/resourceDisplays/SuitDisplay'
import Modal from '../components/features/modal/Modal'
import { Card } from '../components/Card'
import { handleModalToggle } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectModal } from '../reducers/modalSlice'
import PokerRewardModal from '../components/features/pokerGame/PokerRewardModal'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import RightPane from '../components/RightPane'

function App() {

  const modal = useSelector(selectModal)
  const dispatch = useDispatch()

  return (
    <>
      {/* {modal.toggleModal &&
      <Modal header={'Poker sadf'} content={<><Card /></>} footer={<button onClick={() => handleModalToggle(dispatch)}>close</button>}/>
      }      
      <button onClick={() => handleModalToggle(dispatch)}>close</button> */}
      <LeftPane />
      <RightPane />
      
      {/* <Dealer /> */}
      {/* <SuitDisplay /> */}
    </>
  )
}

export default App