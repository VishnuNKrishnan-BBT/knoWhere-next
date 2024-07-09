'use client'

import CreateAccountFormS1 from '@/components/FormStages/CreateAccountFormS1'
import TrackerRegistrationS1 from '@/components/FormStages/TrackerRegistrationS1'
import LoginPageFooter from '@/components/LoginPageFooter/LoginPageFooter'
import PageHeading from '@/components/PageHeading/PageHeading'
import SectionContainer from '@/components/SectionContainer/SectionContainer'
import React from 'react'

function page() {
    return (
        <div>
            <PageHeading heading={'New Tracker'} caption={'Register your knoWhere tracker...'} back />
            <SectionContainer style={{ height: '50vh', zIndex: 10 }}>
                <TrackerRegistrationS1 />
            </SectionContainer>
            <LoginPageFooter />
        </div>
    )
}

export default page
