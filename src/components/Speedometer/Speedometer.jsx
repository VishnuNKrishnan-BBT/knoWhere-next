import React from 'react'
import styles from './style.module.css'

function Speedometer({
    speed = "...",
    unit = "km/h"
}) {
    return (
        <div className={`${styles.wrapper}`}>
            <span className={`${styles.mainText}`}>{speed}</span>
            {speed !== 'P' && <span className={`${styles.unit}`}>{unit}</span>}
        </div>
    )
}

export default Speedometer
