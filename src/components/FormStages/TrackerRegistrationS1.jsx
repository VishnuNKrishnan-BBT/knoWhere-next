import React from 'react'
import styles from './styles.module.css'
import GoogleIcon from '../GoogleIcon/GoogleIcon'
import InputBoxes from '../InputBoxes/InputBoxes'

function TrackerRegistrationS1({ goToStage = null }) {
    return (
        <div className={styles.wrapper}>
            <form action='/login/otp'>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="">Enter your tracker ID</label>
                    {/* <input className={styles.input} type="text" /> */}
                    <InputBoxes />
                </div>
                <div className={styles.inputBlock}>
                    <button onClick={() => { goToStage(2) }} className={styles.submitBtn}>USE CAMERA</button>
                </div>
            </form>
        </div>
    )
}

export default TrackerRegistrationS1
