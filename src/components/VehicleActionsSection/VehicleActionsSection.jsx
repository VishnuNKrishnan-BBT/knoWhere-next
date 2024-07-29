import React from 'react'
import styles from './styles.module.css'
import { vehicleActionsTabs } from '@/devFiles/vehicleList_mini'

function VehicleActionsSection() { //This component has to be used inside the SectionContainer component.
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.cardsContainer}`}>
                {
                    vehicleActionsTabs.map((obj, i) => <div key={i} className={`${styles.card}`}><p>{obj.title}</p></div>)
                }
            </div>
        </div>
    )
}

export default VehicleActionsSection