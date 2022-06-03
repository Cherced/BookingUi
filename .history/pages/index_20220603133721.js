import React from 'react'
import {AsideMenu} from '../components/molecules/AsideMenu'
import {HeaderDash} from '../components/molecules/HeaderDash'
import { ContentDash } from '../components/molecules/ContentDash'

const DashBoard = () => {
  return (
    <div className="dashBoardContainer">
      <HeaderDash />
      <AsideMenu />
      <ContentDash />
    </div>
    
  )
}

export default DashBoard