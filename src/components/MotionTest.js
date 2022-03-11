import React from 'react'
import { motion } from 'framer-motion'

export default function MotionTest() {
  return (
    <motion.div animate={{
        fontSize: '50px',
        color: 'red',
        x: '100px'
    }}>
        Motion Test
    </motion.div>
  )
}
