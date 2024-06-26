import React from 'react'
import styles from './styles.module.css'

function SectionContainer({
    props,
    children,
    style = {}
}) {
    return (
        <div className={`${styles.wrapper}`} style={style}>
            {children}
        </div>
    )
}

export default SectionContainer
