import React from 'react'
import styles from './raffle-draw.module.css'
import Image from 'next/image'
import Banner from '../../../public/image 40.png'

const RaffleDraw = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className={`${styles.mainBannerImg} col`} >
          <Image src={Banner}/>
        </div>
      </div>
    </div>
  )
}

export default RaffleDraw
