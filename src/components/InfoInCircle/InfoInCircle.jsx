import React from 'react'
import styles from './styles.module.css'

function InfoInCircle({
    type = "parking", // timestamp | parking
    text = "Unavailable",
    extendLeg = true
}) {
    return (
        <>
            <div className={styles.wrapper}>
                {type === 'parking' && <p className={styles.parkingIcon}>P</p>}
                {type !== 'parking' && <p>{text}</p>}
            </div>
            <div className={styles.leg} style={{ height: extendLeg ? '30px' : '0px' }}>

            </div>
        </>
    )
}

export default InfoInCircle
