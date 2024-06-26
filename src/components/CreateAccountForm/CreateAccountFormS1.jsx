import React from 'react'
import styles from './styles.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'

function CreateAccountFormS1({ goToStage = null }) {
    return (
        <div className={styles.wrapper}>
            <form className={styles.loginForm} action='/login/otp'>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">First Name</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Last Name</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.inputBlock}>
                    <button onClick={() => { goToStage(2) }} className={styles.submitBtn}>NEXT</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountFormS1
