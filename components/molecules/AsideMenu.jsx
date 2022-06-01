import React from 'react'
import { ItemAside } from '../atoms/ItemAside'

export const AsideMenu = () => {
  return (
    <aside className="asideMenuContainer">
        <ItemAside Image='/images/metrics.png' Title='Metricas' />
        <ItemAside Image='/images/users.png' Title='Usuarios' />
        <ItemAside Image='/images/adminPanel.png' Title='Adminsitradores' />
        <ItemAside Image='/images/hostS.png' Title='Alojamientos' />
    </aside>
  )
}
