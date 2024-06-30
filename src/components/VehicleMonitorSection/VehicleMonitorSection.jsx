import React from 'react'
import styles from './styles.module.css'
import Speedometer from '../Speedometer/Speedometer'
import BrandStyleText from '../BrandStyleText/BrandStyleText'
import { viewPort1 } from '@/devFiles/vehicleList_mini'

import ReactMapGL, { ViewState } from "react-map-gl"

function VehicleMonitorSection() { //This component has to be used inside the SectionContainer component.
    return (
        <>
            <div className={`${styles.subWrapperRowType1}`}>
                <Speedometer />
                <div className={`${styles.infoHolderRowType1}`}>
                    <p className={`${styles.label}`}>Status</p>
                    <p className={`${styles.infoLevel1}`}><BrandStyleText text={'In Transit'} /></p>

                    <p className={`${styles.label}`}>Last Identified Location</p>
                    <p className={`${styles.infoLevel1}`}><BrandStyleText text={'Al Majaz 1 (15:03)'} /></p>
                </div>
            </div>
            <ReactMapGL
                mapboxAccessToken={'pk.eyJ1IjoiYmluYXJ5LWJveCIsImEiOiJjbG0yOHVzN3ExaTQzM2ttaGN2MzVkMHJrIn0.YxN1LZxeWl47Z4TN04_afQ'}
                {...viewPort1}
                height="100px"
                width="100px"
                mapStyle={'mapbox://styles/mapbox/light-v11'}
                attributionControl={false}
            >
            </ReactMapGL>
        </>
    )
}

export default VehicleMonitorSection
