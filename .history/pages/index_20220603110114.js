import React from 'react'
import {AsideMenu} from '../components/molecules/AsideMenu'
import {HeaderDash} from '../components/molecules/HeaderDash'

const DashBoard = () => {
  return (
    <div className="dashBoardContainer">
      <HeaderDash />
      <ContentDash />
      <AsideMenu />
      
    </div>
    
  )
}

export default DashBoard