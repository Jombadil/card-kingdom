import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEncounter } from '../../../actions/actions'
import { selectArea } from '../../../reducers/areaSlice'

export default function SetEncounterBtn() {
    const area = useSelector(selectArea)
    const dispatch = useDispatch()
  return (
    <button onClick={() => setEncounter(dispatch, area)}>set encounter</button>
  )
}
