import React from 'react'
import Image from 'next/image'

export const BrandHeader = (props) => {
  return (
    <div className="BrandHeaderContainer">
        <Image src={props.src} width={80} height={80} />
    </div>
  )
}
