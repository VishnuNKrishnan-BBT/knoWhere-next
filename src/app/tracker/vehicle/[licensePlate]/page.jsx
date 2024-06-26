'use client'

import React, { useState } from 'react'
import styles from './style.module.css'
import PageHeading from '@/components/PageHeading/PageHeading'
import SectionContainer from '@/components/SectionContainer/SectionContainer'
import ReactMapGL, { ViewState } from "react-map-gl"
import { VehicleDetailsTabs, viewPort1 } from '@/devFiles/vehicleList_mini'
import VehicleNameDesc from '@/components/VehicleNameDesc/vehicleNameDesc'
import TabSwitcher from '@/components/TabSwitcher/TabSwitcher'
import DriverCardMini from '@/components/DriverCardMini/DriverCardMini'
import { driverHistory } from '@/devFiles/vehicleList_mini'
import LocationCardMini from '@/components/LocationCardMini/LocationCardMini'

function page({ params }) {

    const licensePlate = decodeURIComponent(params.licensePlate)

    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const handleTabChange = tabIndex => {
        setActiveTabIndex(tabIndex)
    }

    return (
        <div>
            <PageHeading heading={licensePlate} caption={'Vehicle details'} mini back />
            <main>
                {/* <div className={`${styles.mapHolder}`}>
                    <ReactMapGL
                        mapboxAccessToken={'pk.eyJ1IjoiYmluYXJ5LWJveCIsImEiOiJjbG0yOHVzN3ExaTQzM2ttaGN2MzVkMHJrIn0.YxN1LZxeWl47Z4TN04_afQ'}
                        {...viewPort1}
                        height="100px"
                        width="100px"
                        mapStyle={'mapbox://styles/mapbox/streets-v12'}
                        attributionControl={false}
                    >
                    </ReactMapGL>
                </div>
                <SectionContainer style={{ height: 'initial', transform: 'translateY(-75px)' }}>
                    <h2></h2>
                </SectionContainer> */}

                <SectionContainer>
                    <VehicleNameDesc manufacturer='Nissan' model='Pathfinder' />
                    <TabSwitcher tabs={VehicleDetailsTabs} activeTabIndex={activeTabIndex} onChange={handleTabChange} />
                    <SectionContainer style={{ height: "calc(85vh - 146px)" }}>
                        { //Locations Section
                            // activeTabIndex == 1 && driverHistory.map((obj, index) => <DriverCardMini
                            //     key={index}
                            //     fullName={obj.fullName}
                            //     startDate={obj.startDate}
                            //     endDate={obj.endDate}
                            //     violationCount={obj.violationCount}
                            //     totalDistanceDriven={obj.totalDistanceDriven}
                            //     maxSpeed={obj.maxSpeed}
                            //     backgroundImg={obj.imgUrl}
                            // />)
                            activeTabIndex == 1 && <>
                                <LocationCardMini timestamp={'13:10'} mainText={'Abu Shagara'} subText1='Omran Taryam Street' subText2='Sharjah' />
                                <LocationCardMini timestamp={'13:20'} mainText={'Majaz 1'} subText1='Majaz Street' subText2='Sharjah' />
                                <LocationCardMini timestamp={'13:30'} mainText={'Majaz 3'} subText1='Corniche Street' subText2='Sharjah' />
                                <LocationCardMini timestamp={'13:40'} mainText={'Al Khan'} subText1='Al Khalidiya Street' subText2='Sharjah' />
                                <LocationCardMini timestamp={'13:50'} mainText={'Mamzar'} subText1='Al Ittihad Street' subText2='Dubai' parking />
                                <LocationCardMini timestamp={'14:10'} mainText={'Abu Shagara'} subText1='Omran Taryam Street' subText2='Sharjah' />
                                <LocationCardMini timestamp={'14:50'} mainText={'Abu Shagara'} subText1='Omran Taryam Street' subText2='Sharjah' />
                                <LocationCardMini timestamp={'15:50'} mainText={'Abu Shagara'} subText1='Omran Taryam Street' subText2='Sharjah' />
                                <LocationCardMini isLast parking />
                            </>
                        }

                        { //Drivers Section
                            activeTabIndex == 2 && driverHistory.map((obj, index) => <DriverCardMini
                                key={index}
                                fullName={obj.fullName}
                                startDate={obj.startDate}
                                endDate={obj.endDate}
                                violationCount={obj.violationCount}
                                totalDistanceDriven={obj.totalDistanceDriven}
                                maxSpeed={obj.maxSpeed}
                                backgroundImg={obj.imgUrl}
                            />)
                        }
                    </SectionContainer>
                </SectionContainer>
            </main>
        </div>
    )
}

export default page
