import React from 'react'
import styles from './styles.module.css'
import NoPhoto from '../../assets/user.png'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function DriverCardMini({
    fullName = "Name not available",
    backgroundImg = null,
    startDate = "Started",
    endDate = "Ended",
    violationCount = "NA",
    totalDistanceDriven = "NA",
    maxSpeed = "NA",
    index = 1
}) {
    return (
        <div className={`${styles.wrapper}`} style={{ '--index': 1 }}>
            <div className={`${styles.photoHolder}`} style={{ backgroundImage: backgroundImg ? `url("${backgroundImg}")` : `url("https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg")` }}></div>
            <p className={`${styles.dates}`}>{startDate}&emsp;to&emsp;{endDate}</p>
            <p className={`${styles.name}`}>{fullName}</p>
            <div className={`${styles.miniInfoHolder}`}>
                <div className={`${styles.infoCard}`}>
                    <span className={`${styles.info}`}>{violationCount}</span>
                </div>
                <div className={`${styles.infoCard}`}>
                    <span className={`${styles.info}`}>{totalDistanceDriven} kms</span>
                </div>
                <div className={`${styles.infoCard}`}>
                    <span className={`${styles.info}`}>{maxSpeed} km/h</span>
                </div>
            </div>
        </div>
    )
}

export default DriverCardMini
