'use client'

import React, {useState} from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
      const [shownav, setShownav] = useState(false)
      const handlenavShow = () => {
            setShownav((prevState) => !prevState)  
      }
      const handlenavHide = () => {
            setShownav(false)
      }
  return (
    <div>
              <Nav openNav={handlenavShow} />
              <MobileNav showNav={shownav} closeNav={handlenavHide} />
    </div>
  )
}

export default ResponsiveNav
