'use client'

import React, { useState } from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import LoginPageFooter from '../../components/LoginPageFooter/LoginPageFooter'
import CreateAccountFormS1 from '../../components/FormStages/CreateAccountFormS1'
import CreateAccountFormS2 from '../../components/FormStages/CreateAccountFormS2'
import CreateAccountFormS3 from '../../components/FormStages/CreateAccountFormS3'

function page() {
    const [stage, setStage] = useState(1)

    const goToStage = stage => {
        setStage(stage)
    }

    return (
        <div>
            <PageHeading heading={'Welcome!'} caption={'Let\'s get started with some basic information...'} />
            <main>
                {stage == 1 && <CreateAccountFormS1 goToStage={goToStage} />}
                {stage == 2 && <CreateAccountFormS2 goToStage={goToStage} />}
                {stage == 3 && <CreateAccountFormS3 goToStage={goToStage} />}
            </main>
            <LoginPageFooter />
        </div>
    )
}

export default page
