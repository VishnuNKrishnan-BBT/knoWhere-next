import React from 'react'
import styles from './styles.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function AccountRecoveryForm() {
    return (
        <div className={styles.wrapper}>
            <form className={styles.loginForm} action='/login-with-otp'>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Enter your email ID</label>
                    <input className={styles.input} type="number" />
                </div>
                <div className={styles.inputBlock}>
                    <button className={styles.submitBtn}>SEND RESET LINK</button>
                </div>
            </form>
        </div>
    )
}

export default AccountRecoveryForm
