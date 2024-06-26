import React from 'react'
import styles from './styles.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function LoginForm() {
    return (
        <div className={styles.wrapper}>
            <form className={styles.loginForm} action='/login/otp'>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Account ID</label>
                    <input className={styles.input} type="number" />
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Password</label>
                    <input className={styles.input} type="password" />
                </div>
                <div className={styles.inputBlock}>
                    <button className={styles.submitBtn}>SEND OTP</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
