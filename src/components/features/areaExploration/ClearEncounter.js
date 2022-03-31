import React from 'react'
import { useDispatch } from 'react-redux'
import { clearEncounter } from '../../../actions/actions'

export default function ClearEncounter() {
    const dispatch = useDispatch()
  return (
    <button onClick={() => clearEncounter(dispatch)}>set encounter</button>
  )
}
