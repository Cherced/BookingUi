import React from 'react'
import { BrandHeader } from '../atoms/BrandHeader'
import {ProfileInfoHeader} from '../atoms/ProfileInfoHeader'

export const HeaderDash = () => {
  return (
    <header className="HeaderDashContainer">
        <BrandHeader src='/images/logo.png' />
        <ProfileInfoHeader userImage='/images/R.jpg' userRole="Adminstrador" />        
    </header>
  )
}