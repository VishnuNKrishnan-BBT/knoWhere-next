'use client'

import HorizontalScrollContainer from '@/components/HorizontalScrollContainer/HorizontalScrollContainer'
import PageHeading from '@/components/PageHeading/PageHeading'
import SectionContainer from '@/components/SectionContainer/SectionContainer'
import VehicleCardMini from '@/components/VehicleCardMini/VehicleCardMini'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Switch from 'react-switch'
import "mapbox-gl/dist/mapbox-gl.css"
import { vehicleList_mini } from '@/devFiles/vehicleList_mini'
import { toggleFilter, handleQueryChange } from '@/utils/utils'
import VehicleCardMini_Skeleton from '@/components/VehicleCardMini/VehicleCardMini_Skeleton'

function page() {
    //IS LOADING
    const [isLoading, setIsLoading] = useState(true)

    //LISTINGS
    const [listings, setListings] = useState([])

    //FETCH LISTINGS
    const fetchListings = () => {
        setListings(vehicleList_mini)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchListings()
    }, [])

    //FILTER SWITCHES AND TOGGLE FUNCTIONS
    const [filter_online, setFilter_online] = useState(true)
    const [filter_assigned, setFilter_assigned] = useState(true)
    const [filter_query, setFilter_Query] = useState('')





    const viewport = {
        width: '100%',
        height: 400,
        latitude: 25,
        longitude: 55,
        zoom: 8
    };

    return (
        <div>
            <PageHeading heading={'Dashboard'} caption={'Tap a card to access more details...'} mini />
            <main>
                {/* <div className={`${styles.mapHolder}`}>
                    <ReactMapGL
                        mapboxAccessToken={'pk.eyJ1IjoiYmluYXJ5LWJveCIsImEiOiJjbG0yOHVzN3ExaTQzM2ttaGN2MzVkMHJrIn0.YxN1LZxeWl47Z4TN04_afQ'}
                        {...viewport}
                        height="100px"
                        width="100px"
                        mapStyle={'mapbox://styles/mapbox/streets-v12'}
                    >
                    </ReactMapGL>
                </div> */}
                <SectionContainer>
                    <div className={`${styles.searchbarHolder}`}>
                        <input value={filter_query} onChange={e => { handleQueryChange(e, vehicleList_mini, setListings, setFilter_Query) }} className={`${styles.searchInput}`} type="text" placeholder='Search with license plate, driver name etc.' />
                    </div>
                    <div className={`${styles.headingBlock}`}>
                        <p className={`${styles.switchText}`}><span className={`${styles.countHolder}`}>{listings.filter(obj => !obj.online).length}</span> Offline</p>
                        <div className={`${styles.switchHolder}`}>
                            <Switch
                                checked={filter_online}
                                onChange={() => { toggleFilter(filter_online, setFilter_online) }}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onColor={'#12153D'}
                                height={20}
                                width={35}
                            />
                        </div>
                        <p className={`${styles.switchText}`}>Online <span className={`${styles.countHolder}`}>{listings.filter(obj => obj.online).length}</span></p>
                    </div>
                    <HorizontalScrollContainer>
                        {isLoading && <VehicleCardMini_Skeleton />}
                        {
                            listings
                                .filter(obj => obj.online === filter_online)
                                .map((obj, key) => <VehicleCardMini
                                    key={key}
                                    trackerId={obj.trackerId}
                                    licenseNumber={obj.licenseNumber}
                                    description={obj.description}
                                    driverName={obj.driverName}
                                    online={obj.online}
                                    assigned={obj.assigned}
                                />
                                )
                        }
                    </HorizontalScrollContainer>

                    <div className={`${styles.headingBlock}`}>
                        <p className={`${styles.switchText}`}><span className={`${styles.countHolder}`}>{listings.filter(obj => !obj.assigned).length}</span> Unassigned</p>
                        <div className={`${styles.switchHolder}`}>
                            <Switch
                                checked={filter_assigned}
                                onChange={() => { toggleFilter(filter_assigned, setFilter_assigned) }}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                onColor={'#12153D'}
                                height={20}
                                width={35}
                            />
                        </div>
                        <p className={`${styles.switchText}`}>Assigned <span className={`${styles.countHolder}`}>{listings.filter(obj => !obj.assigned).length}</span></p>
                    </div>
                    <HorizontalScrollContainer>
                        {isLoading && <VehicleCardMini_Skeleton />}
                        {
                            listings
                                .filter(obj => obj.assigned === filter_assigned)
                                .map((obj, key) => <VehicleCardMini
                                    key={key}
                                    trackerId={obj.trackerId}
                                    licenseNumber={obj.licenseNumber}
                                    description={obj.description}
                                    driverName={obj.driverName}
                                    online={obj.online}
                                    assigned={obj.assigned}
                                />
                                )
                        }
                    </HorizontalScrollContainer>
                </SectionContainer>
            </main>
        </div>
    )
}

export default page
