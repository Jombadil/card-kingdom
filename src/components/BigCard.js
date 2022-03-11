import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { handleBigCardClick } from '../actions/actions.js';
import { Card } from './Card.js';

export default function BigCard() {

  const dispatch = useDispatch();
  
  return (
      <motion.div  
      style={{margin: '20px'}}
      whileHover={{scale: 1.1}}
      whileTap={{scale: .9}}
      onClick={() => handleBigCardClick(dispatch)} 
      >
      <Card name={'Click Me!'}/>
      </motion.div>
  )
}
