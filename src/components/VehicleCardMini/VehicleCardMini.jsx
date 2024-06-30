'use client'

import React from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'
import BrandStyleText from '../BrandStyleText/BrandStyleText'

function VehicleCardMini(props) {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/tracker/vehicle/${props.licenseNumber}`)
    }

    return (
        <div className={`${styles.wrapper}`} onClick={handleClick}>
            <p className={`${styles.licenseNumber}`}><BrandStyleText text={props.licenseNumber} /></p>
            <p className={`${styles.vehicleName}`}>{props.description}</p>
            <p className={`${styles.driverName}`}>{props.driverName}</p>
        </div>
    )
}

export default VehicleCardMini
