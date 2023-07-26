import React, { useState } from 'react'
import classes from './Navbar.module.css'
import Profile from './Profile'

const Navbar = ({sendData}) => {
 
  const [search,setSearch]=useState("");

  return (
    <>
      <Profile/>  
      <nav className='navbar w-100'>
        <div className='container'> 
          <ul className='navbar my-2 p-2'>
            <a className={`${classes.current} nav-link`} href="/" >
              <li>Users</li>
            </a>
            <a className='nav-link' href="/c">
              <li>Campaign</li>   
            </a>
            <a className='nav-link' href="/table">
              <li>Table</li>
            </a>
            <a className='nav-link' href="/list">
              <li>List</li>
            </a>

          </ul>
          <i className='fa-solid fa-arrows-rotate'/>
          <span className='bg-white'><i className='fa-solid fa-download mx-2'/>Download</span>
          <span style={{display:'inline-flex'}}>
            <input type='text' 
              value={search} onChange={(e)=>{setSearch(e.target.value);sendData(search)}}
            className='form-control w-100' placeholder='Search for influencer'/>
            <button
              // onClick={()=>sendData(search)}
             className='mx-2 btn btn-primary text-black bg-white border'>
             Search</button>
          </span>
          <i className='fa fa-bars'/>
        </div>
      </nav> 
    </>
  )
}

export default Navbar