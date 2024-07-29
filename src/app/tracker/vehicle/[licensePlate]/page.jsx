'use client'

import React, { useState } from 'react'
import styles from './style.module.css'
import PageHeading from '@/components/PageHeading/PageHeading'
import SectionContainer from '@/components/SectionContainer/SectionContainer'
import { VehicleDetailsTabs, viewPort1, locationHistory, vehicleActionsTabs } from '@/devFiles/vehicleList_mini'
import VehicleNameDesc from '@/components/VehicleNameDesc/vehicleNameDesc'
import TabSwitcher from '@/components/TabSwitcher/TabSwitcher'
import DriverCardMini from '@/components/DriverCardMini/DriverCardMini'
import { driverHistory } from '@/devFiles/vehicleList_mini'
import LocationCardMini from '@/components/LocationCardMini/LocationCardMini'
import VehicleMonitorSection from '@/components/VehicleMonitorSection/VehicleMonitorSection'
import VehicleActionsSection from '@/components/VehicleActionsSection/VehicleActionsSection'
import VehicleActionItem from '@/components/VehicleActionItem/VehicleActionItem'

function page({ params }) {

    const licensePlate = decodeURIComponent(params.licensePlate)

    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [actionItemIndex, setActionItem] = useState(0) //-1 is for menu page. Array items start from 0.

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
                    <VehicleNameDesc logo='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png' manufacturer='BMW' model='X5 HSE Limited' />
                    <TabSwitcher tabs={VehicleDetailsTabs} activeTabIndex={activeTabIndex} onChange={handleTabChange} />
                    <SectionContainer style={{ height: "calc(85vh - 146px)" }}>
                        { //Monitor Section
                            activeTabIndex == 0 && <VehicleMonitorSection />
                        }
                        { //Locations Section
                            activeTabIndex == 1 && locationHistory.map((obj, index) => <LocationCardMini
                                key={`LocationCardMini_${index}`}
                                timestamp={obj.timestamp}
                                mainText={obj.main}
                                subText1={obj.sub1}
                                subText2={obj.sub2}
                                isLast={locationHistory.length == (index + 1)}
                                parking={obj.parked}
                            />)
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

                        {   //Actions Section
                            activeTabIndex == 3 && actionItemIndex == -1 && <VehicleActionsSection />
                        }
                        {
                            activeTabIndex == 3 && actionItemIndex !== -1 && <VehicleActionItem index={actionItemIndex} />
                        }
                    </SectionContainer>
                </SectionContainer>
            </main>
        </div>
    )
}

export default page
