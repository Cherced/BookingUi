import React from 'react'
import {AsideMenu} from '../components/molecules/AsideMenu'
import {HeaderDash} from '../components/molecules/HeaderDash'
import { ContentDash } from '../components/molecules/ContentDash'

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