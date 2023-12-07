import React from 'react'
import UserContent from '../userContent/UserContent'
import TextField from '@mui/material/TextField';
import './UserInfo.css';


export default function UserInfo() {
  return (
    <>
        <UserContent title="مشخصات من">
        <TextField className='ttt' id="outlined-basic" label="نام و تخلص" variant="outlined" />
        </UserContent>
    </>
  )
}
