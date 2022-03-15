import React from 'react'
import { useSelector } from 'react-redux'
import { selectArea } from '../../../reducers/areaSlice'
import BattleCardField from './BattleCardField'
import EncounterList from './EncounterList'

import styles from './area.module.css'


export default function AreaExploration() {
    const area = useSelector(selectArea);
    console.log(styles)

  return (
    <div className={styles['area-container']}>
        <BattleCardField area={area} />
        <EncounterList />
    </div>
  )
}
