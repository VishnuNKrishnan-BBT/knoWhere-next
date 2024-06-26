'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'
import Image from 'next/image'
import BackIcon from '../../assets/backIcon.png'

function PageHeading({
  heading = null,
  caption = null,
  mini = false,
  back = false,
  backLink = null
}) {

  const router = useRouter()
  const goToPreviousPage = () => {
    router.back()
  }

  return (
    <div className={`${styles.wrapper} ${mini ? styles.miniSize : styles.fullSize}`}>
      {back &&
        <div className={`${styles.backBtnHolder}`}>
          <Image
            className={`${styles.backIcon}`}
            src={BackIcon}
            alt={'Back'}
            onClick={goToPreviousPage}
          />
        </div>
      }
      <div className={`${styles.headingHolder}`}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
    </div>
  )
}

export default PageHeading
