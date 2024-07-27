import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkPage() {
  return (
    <div>
        <div className='links'>
<Link to="/"> HOME </Link>
<Link to="/about"> ABOUT US </Link>
<Link to="/project"> PROJECTS  </Link>
<Link to="/partner"> PARTNERS WITH US  </Link>
<Link to="/gallary"> GALLERY </Link>
<Link to="/carrer"> CARRERS  </Link>
<Link to="/knowledge"> KNOWLEDGE HUB  </Link>
<Link to="/contact"> CONTACT </Link>

        </div>

    </div>
  )
}
