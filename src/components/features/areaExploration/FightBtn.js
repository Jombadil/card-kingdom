import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFightInterval, handleFightToggle } from '../../../actions/actions';
import { selectArea } from '../../../reducers/areaSlice'

export default function FightBtn() {
    const area = useSelector(selectArea);
    const dispatch = useDispatch();

    useEffect(() => {
        const fightInterval = setInterval(() => {
            if (area.fighting) {handleFightInterval(dispatch, area)}
        }, 1000)
        return () => clearInterval(fightInterval)
    })

  return (
    <button onClick={() => handleFightToggle(dispatch)}>Fight</button>
  )
}
