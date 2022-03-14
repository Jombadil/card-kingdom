import React from 'react'
import { motion } from 'framer-motion'
import CardStyles from './Card.module.css'
import styles from '../Utils.module.css'

export const Card = ({backgroundImage}) => {
  return (
    <div className={`${CardStyles.card} ${styles.noselect}`} style={{backgroundImage: backgroundImage}}></div>
  )
}

export const PokerCard = ({backgroundImage, id}) => {
  const xNum = Math.floor(Math.random() * 300)
  const yNum = Math.floor(Math.random() * 200) + 300
  return (
    <motion.div 
    id={id}
    initial={{x: 0, rotate: 200}}
    animate={{x: xNum, y: yNum, rotate: 0}}
    whileHover={{scale: 1.1}}
    whileTap={{scale: .8}}
    className={`${CardStyles.card} ${CardStyles.floatingPokerCard} ${styles.noselect}`}
    style={{backgroundImage: backgroundImage}}
    ></motion.div>
  )
}

export const FlipableCard = ({frontChildren, backChildren}) => {
  return (
    <div className={`${CardStyles.flipCard} ${styles.noselect}`}>
      <div className={`${CardStyles.flipCardInner}`}>
        <div className={`${CardStyles.flipCardFront}`}>{frontChildren}</div>
        <div className={`${CardStyles.flipCardBack}`}>{backChildren}</div>
      </div>
    </div>
  )
}

export const DeckCard = ({front, back}) => {
  return <FlipableCard frontChildren={front} backChildren={back} />
}