import React from 'react'
import styles from './styles.module.css'
import GlobalStyles from '../../../src/app/global.module.css'

function VehicleNameDesc({
    logo = '',
    manufacturer = 'Manufacturer',
    model = 'Model'
}) {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.logoHolder}`} style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg")` }}></div>
            <div className={`${styles.descHolder}`}>
                <p className={`${styles.manufacturer}`}>{manufacturer}</p>
                <h2 className={`${styles.model} ${GlobalStyles.gradientText}`}>{model}</h2>
            </div>
        </div>
    )
}

export default VehicleNameDesc
