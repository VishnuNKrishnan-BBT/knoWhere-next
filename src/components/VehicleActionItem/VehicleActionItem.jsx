import React from 'react'
import styles from './styles.module.css'
import BrandStyleText from '../BrandStyleText/BrandStyleText'
import { vehicleActionsTabs } from '@/devFiles/vehicleList_mini'

function VehicleActionItem({ index }) { //This component has to be used inside the SectionContainer component.
    return (
        <div className={`${styles.wrapper}`}>
            {/* Section Heading */}
            <p><BrandStyleText text={vehicleActionsTabs[index].title} /></p>
        </div>
    )
}

export default VehicleActionItem