import React from 'react'
import Image from 'next/image'




export const ProfileInfoHeader = (props) => {
  return (
    <div className="ProfileInfoHeader">
        <div className="ProfileInfoHeader-Image">
        <Image src={props.userImage} width={60} height={60} />
        </div>
        <div className="ProfileInfoHeader-Name">
        <h1>{props.userRole}</h1>
        </div>
    </div>
  )
}
