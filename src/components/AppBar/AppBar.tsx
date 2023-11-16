import React from 'react'
import './AppBar.css';


export default function AppBar() {
  return (
    <>
        <div className="appBar">
            <div className="headerMenuItems">
              <div className='menuItem menuItemActive'>home</div>
              <div className='menuItem'>home</div>
              <div className='menuItem'>home</div>
            </div>
            <div className="headerLeftItem">
              <a href='#' className="headerAuth">ورود / ثبت نام</a>
              <a href="#"><img src="img/logo.png" alt="" className='headerLogo' /></a>
            </div>
        </div>
    </>
  )
}
