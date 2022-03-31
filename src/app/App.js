import React, { useEffect } from 'react'
import LeftPane from '../components/LeftPane'
import { handleFightInterval } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import RightPane from '../components/RightPane'
import { selectArea } from '../reducers/areaSlice'
import { selectProducers } from '../reducers/producersSlice'

function App() {

  const area = useSelector(selectArea)
  const producers = useSelector(selectProducers)
  const dispatch = useDispatch()


  // GAME INTERVAL //  <--- main game interval
  useEffect(() => {
    const gameInterval = setInterval(() => {
    // calc and add card production
    // calc and add suit production
    if (area.fighting) { handleFightInterval(dispatch, area) }
  }, 1000)
      return () => clearInterval(gameInterval)
  })


  return (
    <>
      <LeftPane />
      <RightPane />
    </>
  )
}

export default App