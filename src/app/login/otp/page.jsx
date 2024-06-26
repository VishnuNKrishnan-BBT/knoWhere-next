import LoginPageFooter from '@/components/LoginPageFooter/LoginPageFooter'
import LoginWithOTPForm from '@/components/LoginWithOTPForm/LoginWithOTPForm'
import PageHeading from '@/components/PageHeading/PageHeading'
import React from 'react'

function page() {
    return (
        <div>
            <PageHeading heading={'OTP...'} />
            <main>
                <LoginWithOTPForm />
            </main>
            <LoginPageFooter />
        </div>
    )
}

export default page
