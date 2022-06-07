import React from 'react'
import {AsideMenu} from '../components/molecules/AsideMenu'
import {HeaderDash} from '../components/molecules/HeaderDash'
import MyChart from '../components/MyChart'

const DashBoard = () => {
  return (
    <div className="dashBoardContainer">
      <HeaderDash />
      
      <AsideMenu />
      
    </div>
    
  )
}

export default DashBoard