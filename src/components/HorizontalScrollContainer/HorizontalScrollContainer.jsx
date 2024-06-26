import React from 'react'
import styles from './styles.module.css'

function HorizontalScrollContainer({
    props,
    children
}) {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.childrenContainer}`}>
                {children}
            </div>
        </div>
    )
}

export default HorizontalScrollContainer
