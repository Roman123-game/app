
import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.modal.css"
const SideBar = () => {
  return (
    <div className='modal'> 
    <Link to="/charts" className='button' ><h3>Charts</h3></Link>
    <Link to="/" className='button'><h3>Table</h3></Link>
    </div>
  )
}

export default SideBar