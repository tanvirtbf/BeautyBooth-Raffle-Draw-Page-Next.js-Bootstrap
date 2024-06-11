import React from 'react'
import styles from './DrawCard.module.css'
import Image from 'next/image'

const DrawCard = ({title,para,icon}) => {
  return (
    <div className={`${styles.drawCard}`}>
      <div className={`${styles.icon}`}>
        <Image src={icon}/>
      </div>
      <div className={`${styles.text}`}>
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
    </div>
  )
}

export default DrawCard
