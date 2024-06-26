import React from 'react'
import styles from './styles.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function CreateAccountFormS2({ goToStage = null }) {
    return (
        <div className={styles.wrapper}>
            <form className={styles.loginForm} action='/login/otp'>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Company</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Fleet Count</label>
                    <input className={styles.input} type="number" />
                </div>
                <div className={styles.inputBlock}>
                    <button onClick={() => { goToStage(3) }} className={styles.submitBtn}>NEXT</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountFormS2
