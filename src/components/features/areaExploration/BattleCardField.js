import React from 'react'
import styles from './area.module.css'
import BattleCardGroup from './BattleCardGroup'

export default function BattleCardField({area}) {

  return (
    <div className={styles['battle-card-field']}>
        <BattleCardGroup side={'enemy'} cardGroup={area.currentEncounter.cardGroup} />
        <BattleCardGroup side={'hero'} cardGroup={area.currentHeroes} />
    </div>
  )
}
