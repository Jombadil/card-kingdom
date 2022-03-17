import React from 'react'
import { getDeckCardBG } from '../../../Utils'
import { FlipableCard } from '../../Card'
import styles from './area.module.css'

export default function BattleCardGroup({cardGroup}) {
  
  const CardFront = ({card}) => {
    let image = getDeckCardBG(card.class)
    return <>
      <div className={styles['card-front']} style={{backgroundImage: image}}>
        <div className={styles['level-display']}>{card.level}</div>
        <div className={styles['status-displays']}>
          <div className={styles['magic-bar']}><div className={styles['status-bar-inner']} style={{width: `${(card.magic.currentMagic / card.magic.base) * 100}%`}}></div></div>
          <div className={styles['health-bar']}><div className={styles['status-bar-inner']} style={{width: `${(card.health.currentHealth / card.health.base) * 100}%`}}></div></div>
        </div>
      </div>
    </>
  } // HANDLING CARD COMPONENTS NEEDS TO BE REDONE

  const cards = cardGroup.map((card) => {
    return <div key={card.id}> {/* <----fix this so it is in the actual card */}
    <FlipableCard frontChildren={<CardFront card={card} />} />
    </div>
  })

  return (
    <div className={styles['battle-card-group']}>{cards}</div>
  )
}
