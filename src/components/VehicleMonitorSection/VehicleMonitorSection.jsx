import React from 'react'
import styles from './styles.module.css'
import Speedometer from '../Speedometer/Speedometer'
import BrandStyleText from '../BrandStyleText/BrandStyleText'
import { routeMap, routeMapStyle, viewPort1 } from '@/devFiles/vehicleList_mini'
import 'mapbox-gl/dist/mapbox-gl.css'

import ReactMapGL, { Source, Layer, Marker } from "react-map-gl"

function VehicleMonitorSection() { //This component has to be used inside the SectionContainer component.
    return (
        <>
            <div className={`${styles.subWrapperRowType1}`}>
                <Speedometer speed={118} />
                <div className={`${styles.infoHolderRowType1}`}>
                    <p className={`${styles.label}`}>Status</p>
                    <p className={`${styles.infoLevel1}`}><BrandStyleText text={'In Transit'} /></p>

                    <p className={`${styles.label}`}>Last Identified Location</p>
                    <p className={`${styles.infoLevel1}`}><BrandStyleText text={'Al Majaz 1 (15:03)'} /></p>
                </div>
            </div>
            <div className={`${styles.mapHolder}`}>
                <ReactMapGL
                    mapboxAccessToken={'pk.eyJ1IjoiYmluYXJ5LWJveCIsImEiOiJjbG0yOHVzN3ExaTQzM2ttaGN2MzVkMHJrIn0.YxN1LZxeWl47Z4TN04_afQ'}
                    {...viewPort1}
                    height="100px"
                    width="100px"
                    mapStyle={'mapbox://styles/mapbox/light-v11'}
                    attributionControl={false}
                >
                    <Source id="route" type="geojson" data={routeMap}>
                        <Layer {...routeMapStyle} />
                    </Source>

                    <Marker latitude={37.833683} longitude={-122.493782}>
                        <div className={styles.marker}>
                            {/* <img src={'https://static.vecteezy.com/system/resources/thumbnails/019/526/917/small/modern-car-isolated-on-transparent-background-3d-rendering-illustration-png.png'} alt="Custom Marker" style={{ width: '30px', height: '30px' }} /> */}
                        </div>
                    </Marker>
                </ReactMapGL>
            </div>
        </>
    )
}

export default VehicleMonitorSection
