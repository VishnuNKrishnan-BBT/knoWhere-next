import React from 'react'
import styles from './styles.module.css'

function InfoInCircle({
    type = "parking", // timestamp | parking
    text = "Unavailable",
    extendLeg = true
}) {
    return (
        <>
            {/* CIRCLE */}
            <div className={styles.wrapper}>
                {type === 'parking' && <p className={styles.parkingIcon}>P</p>}
                {type !== 'parking' && <p className={styles.mainText}>{text}</p>}
            </div>

            {/* LEG */}
            <div className={styles.leg} style={{ height: extendLeg ? '30px' : '0px' }}></div>
        </>
    )
}

export default InfoInCircle
