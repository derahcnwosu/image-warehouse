import React from 'react'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <motion.div className='footer'
      initial = {{opacity: 0}}
      whileInView = {{opacity: 1}}
      viewport = {{once: false}}
      transition = {{delay: 0.5, duration: 1}}
    >
      <ul>
          <li><a target= '_blank' rel='noreferrer' href='https://facebook.com/dera' className='footer-link social'>FACEBOOK</a></li>
          <li><a target= '_blank' rel='noreferrer' href='https://instagram.com/cydexx_mix' className='footer-link social'>INSTAGRAM</a></li>
      </ul>
      <a href= '/contact' className='footer-link contact'>CONTACT</a>
    </motion.div>
  )
}

export default Footer
