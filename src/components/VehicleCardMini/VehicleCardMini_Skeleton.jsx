'use client'

import React from 'react'
import styles from './styles.module.css'

function VehicleCardMini_Skeleton(props) {

    return (
        <div className={`${styles.wrapper}`}>
            <p className={`${styles.licenseNumber}`}>Loading...</p>
            <p className={`${styles.vehicleName}`}>Loading description...</p>
            <p className={`${styles.driverName}`}>Loading driver name...</p>
        </div>
    )
}

export default VehicleCardMini_Skeleton
