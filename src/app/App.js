import React from 'react'
import LeftPane from '../components/LeftPane'
import SuitDisplay from '../components/features/resourceDisplays/SuitDisplay'
import Modal from '../components/features/modal/Modal'
import { handleModalToggle } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectModal } from '../reducers/modalSlice'
import PokerRewardModal from '../components/features/pokerGame/PokerRewardModal'
import RightPane from '../components/RightPane'

function App() {

  const modal = useSelector(selectModal)
  const dispatch = useDispatch()

  return (
    <>
      <LeftPane />
      <RightPane />
      
      {/* <Dealer /> */}
      {/* <SuitDisplay /> */}
    </>
  )
}

export default App