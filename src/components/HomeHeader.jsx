import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function HomeHeader() {
  return (
    <div className='home_header'>
        <nav className="small-nav">
            <ul>
                <li><Link to= '/projects' className='small-nav-link'>PROJECTS(11)</Link></li>
                <li><Link to= '/menu' className='small-nav-link'>MENU</Link></li>
            </ul>
        </nav>
        <motion.h1 className='lead-txt'
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 0.5, stiffness: 50, type: 'spring'}}
        
        >IMAGE WAREHOUSE</motion.h1>
        <div className="home-img-area">
            <motion.div className="home-small-img"
                initial = {{translateY: 700, opacity: 0}}
                animate = {{translateY: 0, opacity: 1,rotateX: 360}}
                transition = {{delay: 0.6, duration: 2, stiffness: 100, type: 'spring'}}
            ></motion.div>
            <motion.div className="home-big-img" 
                drag
                dragConstraints = {{left: 0, right: 0, top: 0, bottom: 0}}
                dragElastic = {0.3}
                initial = {{translateY: 700, opacity: 0, borderRadius: 0}}
                animate = {{translateY: 0, opacity: 1, borderRadius: '50%'}}
                transition = {{delay: 0.4, duration: 3, stiffness: 100, type: 'spring'}}
                // whileHover={{
                //     scale: 1.2,
                //     transition: { duration: 0.5 },
                //   }}
                //   whileTap={{ scale: 0.9 }}
            ></motion.div>
        </div>
    </div>
  )
}

export default HomeHeader