import React from 'react'
import Image from 'next/image'

export const ItemAside = (props) => {
  return (
    <div className='itemOptionMenu-Container'>
        <div className="itemOption-Image">
        <Image src={props.Image} width={32} height={32} />
        </div>        
        <a className="itemOption-Text">{props.Title}</a>
    </div>
  )
}
