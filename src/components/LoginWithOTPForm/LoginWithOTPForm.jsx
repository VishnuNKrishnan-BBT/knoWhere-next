'use client'

import React from 'react'
import styles from './styles.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import InputBoxes from '../InputBoxes/InputBoxes'

function LoginWithOTPForm() {
    return (
        <div className={styles.wrapper}>
            <form className={styles.loginForm} action='/tracker/dashboard'>
                <div className={styles.inputBlock}>
                    <p>If the credentials are correct, you will receive the OTP on your mobile and email id.</p>
                </div>

                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">OTP</label>
                    {/* <input className={styles.input} type="number" /> */}
                    <InputBoxes onComplete={() => {console.log('OTP Complete')}}/>
                </div>

                <div className={styles.inputBlock}>
                    <a href='/tracker/dashboard' className={styles.resendCTA} htmlFor="">Resend in 00:23</a>
                </div>
            </form>
        </div>
    )
}

export default LoginWithOTPForm
