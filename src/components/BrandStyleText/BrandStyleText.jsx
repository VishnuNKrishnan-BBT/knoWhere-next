import React from 'react'
import styles from './styles.module.css'

function BrandStyleText(props) {
    return (
        <span className={styles.brandStyleText}>{props.text}</span>
    )
}

export default BrandStyleText
