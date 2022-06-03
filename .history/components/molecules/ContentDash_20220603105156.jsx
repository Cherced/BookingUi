import React from 'react'


export const HeaderDash = () => {
  return (
    <header className="HeaderDashContainer">
        <BrandHeader src='/images/logo.png' />
        <ProfileInfoHeader userImage='/images/R.jpg' userRole="Adminstrador" />        
    </header>
  )
}