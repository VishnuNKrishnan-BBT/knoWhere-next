import React from 'react'
import styles from './styles.module.css'
import NoPhoto from '../../assets/user.png'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import BrandStyleText from '../BrandStyleText/BrandStyleText'

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
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.photoHolder}`}>
                <img className={`${styles.photo}`} src={backgroundImg} alt="" />
            </div>
            <div className={`${styles.infoHolder}`}>
                <p className={`${styles.infoText}`}>{`${startDate} - ${endDate}`}</p>
                <p className={`${styles.name}`}><BrandStyleText text={fullName} /></p>
                <div className={`${styles.infoRow}`}>
                    <p className={`${styles.infoRowItem}`}>{violationCount}</p>
                    <p className={`${styles.infoRowItem}`}>{totalDistanceDriven} kms</p>
                    <p className={`${styles.infoRowItem}`}>{maxSpeed} km/h</p>
                </div>
            </div>
        </div>
    )
}

export default DriverCardMini