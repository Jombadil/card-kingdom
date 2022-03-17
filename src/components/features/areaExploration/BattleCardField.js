import React from 'react'
import styles from './area.module.css'
import BattleCardGroup from './BattleCardGroup'
import FightBtn from './FightBtn'

export default function BattleCardField({area}) {

  return (
    <div className={styles['battle-card-field']}>
        <BattleCardGroup side={'enemy'} cardGroup={area.currentEncounter} />
        <FightBtn />
        <BattleCardGroup side={'hero'} cardGroup={area.currentHeroes} />
    </div>
  )
}
