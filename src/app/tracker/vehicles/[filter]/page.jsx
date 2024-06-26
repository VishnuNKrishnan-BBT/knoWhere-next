'use client'

import PageHeading from '@/components/PageHeading/PageHeading'
import SectionContainer from '@/components/SectionContainer/SectionContainer'
import VehicleCardFull from '@/components/VehicleCardFull/VehicleCardFull'
import React, { useEffect, useState } from 'react'

function page() {
    return (
        <div>
            <PageHeading heading={'All Online'} caption={'Tap a card to access more details...'} mini back />
            <main>
                <SectionContainer style={{ padding: '0 15px' }}>
                    <VehicleCardFull licenseNumber={'DXB R 49382'} description={'Land Rover Freelander'} driverName={'Sudheesh Murthy'} />
                    <VehicleCardFull licenseNumber={'SHJ F 29012'} description={'Nissan Pathfinder'} driverName={'Ramesh Sudhakar'} />
                    <VehicleCardFull licenseNumber={'DXB D 10293'} description={'Toyota Land Cruiser'} driverName={'Khalid Muhammad'} />
                    <VehicleCardFull licenseNumber={'DXB F 23909'} description={'Land Rover Freelander'} driverName={'Joy Thomas'} />
                    <VehicleCardFull licenseNumber={'RAK A 43908'} description={'Toyota Land Cruiser'} driverName={'Krishnankutti V.P.'} />
                    <VehicleCardFull licenseNumber={'AJM G 20932'} description={'Toyota Prado'} driverName={'Kunju Muhammad'} />
                    <VehicleCardFull licenseNumber={'FUJ D 23098'} description={'Toyota Fortuner'} driverName={'Harsh Vardhan'} />
                    <VehicleCardFull licenseNumber={'DXB S 34090'} description={'Land Hilux'} driverName={'Mahesh Kumar'} />
                    <VehicleCardFull licenseNumber={'DXB D 20390'} description={'Land Rover Freelander'} driverName={'Shanthanu Mulkiyar'} />
                </SectionContainer>
            </main>
        </div>
    )
}

export default page
