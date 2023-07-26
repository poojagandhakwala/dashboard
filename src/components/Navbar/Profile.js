import React from 'react'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={`${classes.profile} bg-white border `}>
      <div className={`${classes['profile-inner']} h-50 bg-light container `}>
        <div className='row mt-2 d-flex my-0'>
          <div className='col-sm-3 text-center'>
            <i className={`${classes['fa-user']} fa fa-user`}/> 
          </div>
          <div className='col-md-4 p-0 '>
            <p className={`${classes.name} m-0`}>ChethanB</p>
            <p>Brand
             <i className={`${classes['fa-angle-down']} fa fa-angle-down`}/>
            </p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Profile;