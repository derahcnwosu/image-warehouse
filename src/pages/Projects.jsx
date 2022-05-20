import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function Projects() {

  return (
    <div className='projects'>
        <Link to= '/' className='project-go-back'>GO BACK</Link>
        <motion.h1 className='lead-txt'
            initial ={{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 0.5, duration: 1, stiffness: 50, type: 'spring'}}
        >COMING SOON...</motion.h1>
    </div>
  )
}

export default Projects