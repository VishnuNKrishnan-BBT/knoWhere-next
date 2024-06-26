import React from 'react'
import styles from './styles.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function CreateAccountFormS3() {
    return (
        <div className={styles.wrapper}>
            <form className={styles.loginForm} action='/login/otp'>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Email ID</label>
                    <input className={styles.emailInput} type="text" />
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Mobile Number</label>
                    <input className={styles.input} type="number" />
                </div>
                <div className={styles.inputBlock}>
                    <button className={styles.submitBtn}>NEXT</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountFormS3
