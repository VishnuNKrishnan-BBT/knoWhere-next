import React from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'
import BrandStyleText from '../BrandStyleText/BrandStyleText'

function VehicleCardFull(props) {

    const router = useRouter()
    const handleClick = () => {
        router.push(`/tracker/vehicle/${props.licenseNumber}`)
    }

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <div className={styles.primaryInfoRow}>
                <div className={styles.photoHolder}></div>
                <div className={styles.licensePlateHolder}>
                    <h1><BrandStyleText text={props.licenseNumber} /></h1>
                </div>
            </div>
            <div className={styles.secondaryInfoRow}>
                <p>{props.description}</p>
                <p>{props.driverName}</p>
            </div>
        </div>
    )
}

export default VehicleCardFull
