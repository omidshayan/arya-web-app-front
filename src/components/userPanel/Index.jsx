import React from 'react'
import UserSidebar from './userSidebar/UserSidebar'
import './userIndex.css';
import UserContent from './userContent/UserContent';


export default function Index() {
  return (
    <>
      <div className="singleContainer d-flex-all">

        
          <UserSidebar />
        
          <UserContent />
        

      </div>
    </>
  )
}
