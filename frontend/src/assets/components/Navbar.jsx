import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to="/" > {/*This is a tag*/}
                <h1>This is the header</h1>
            </Link>
        </div>
    </header>
  )
}

export default Navbar