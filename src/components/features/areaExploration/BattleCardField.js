import React from 'react'
import styles from './area.module.css'
import BattleCardGroup from './BattleCardGroup'
import ClearEncounter from './ClearEncounter'
import FightBtn from './FightBtn'
import SetEncounterBtn from './SetEncounterBtn'

export default function BattleCardField({area}) {

  return (
    <div className={styles['battle-card-field']}>
        <BattleCardGroup side={'enemy'} cardGroup={area.currentEncounter} />
        <div><FightBtn /><SetEncounterBtn /><ClearEncounter /></div>
        <BattleCardGroup side={'hero'} cardGroup={area.currentHeroes} />
    </div>
  )
}
