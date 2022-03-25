
import { Button } from '@mui/material'
import React from 'react'
import "./SideBar.modal.css"
const SideBar = () => {
  return (
    <div className='modal'>
    <button className='button' ><h3>Charts</h3></button>
    <button className='button'><h3>Table</h3></button>
    </div>
  )
}

export default SideBar