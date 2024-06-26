import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import CloudForgeLogo from '../../assets/CloudForgeDigitalLogo.png'

function LoginPageFooter() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.CTAs}>
                <p className={styles.CTALabel}>Forgot password</p>
                <p className={styles.CTALabel}>Create an account</p>
            </div>
            <p className={styles.developerLabel}>Developed by</p>
            <Image
                src={CloudForgeLogo}
                height={30}
                alt={'CloudForge Digital'}
            />
        </div>
    )
}

export default LoginPageFooter
