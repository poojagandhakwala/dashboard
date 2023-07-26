import React from 'react'
import classes from './Sidebar.module.css'
import image from '../../image-sidebar.png'

const Sidebar = () => {
  return (

  <div className={`${classes.sidebar} d-flex flex-sm-column flex-row flex-nowrap align-items-center`}>
    <ul className={` nav nav-pills text-dark text-decoration-none mb-sm-auto 
    mb-0 align-items-center align-items-sm-start`} id="menu">
      <li className="nav-item">
        <a href="#" className={`${classes['nav-link']} nav-link align-middle px-0`}>
            <img src={image} width='40px' height='40px' />
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className={`${classes['nav-link']} nav-link align-middle px-0`}>
          <i className={`${classes.icon} fa-solid fa-shield p-2`} style={{color:"#f7f7f7",backgroundColor:'#0d6efd'}}/>
        </a>
      </li><li className="nav-item">
        <a href="#" className={`${classes['nav-link']} nav-link align-middle px-2 py-0 bg-white text-dark`}
        style={{fontSize:'25px'}}>
          #
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar;