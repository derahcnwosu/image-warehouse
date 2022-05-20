import React from 'react'
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import {motion} from 'framer-motion'


function HomeSide() {
 
  return (
    <div className='home_side'>
        <ul>
            <li><Link to= '/projects' className='home-nav-link'>PROJECTS(11)</Link></li>
            <li><Link to= '/menu' className='home-nav-link'>MENU</Link></li>
        </ul>

        <motion.div className="home-circle"
            initial = {{opacity: 0}}
            whileInView = {{opacity: 1}}
            viewport = {{once: false}}
            transition = {{delay: 0.9, duration: 2, stiffness: 200, type: 'spring'}}
        >
            <div className="mach">
                <motion.p
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{delay: 1.9, duration: 0.5}}
                >MACH & MACH</motion.p>
                <motion.p
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{delay: 2.5, duration: 0.5}}
                >SS22 NEW COLLECTION</motion.p>
            </div>

            <motion.div 
                 initial = {{opacity: 0}}
                 animate = {{opacity: 1, rotate: 360}}
                 transition = {{delay: 2.7, duration: 0.5}}
            ><Link to= '/projects'><FaArrowRight className='arrow' color='#444'/></Link></motion.div>
            
            <div className="cosmic">
                <motion.p
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{delay: 3.1, duration: 0.5}}
                >KING MARTINS</motion.p>
                <motion.p
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition = {{delay: 3.6, duration: 0.5}}
                >GIDEON HEZEKIAH</motion.p>
            </div>
        </motion.div>
        <div className="brown-box"></div>
        <div className="brown-box2"></div>
    </div>
  )
}

export default HomeSide