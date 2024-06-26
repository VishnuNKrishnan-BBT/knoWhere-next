import React from 'react'
import PageHeading from '../../components/PageHeading/PageHeading'
import LoginPageFooter from '../../components/LoginPageFooter/LoginPageFooter'
import AccountRecoveryForm from '../../components/AccountRecoveryForm/AccountRecoveryForm'

function page() {
    return (
        <div>
            <PageHeading heading={'Account Recovery'} />
            <main>
                <AccountRecoveryForm />
            </main>
            <LoginPageFooter />
        </div>
    )
}

export default page
