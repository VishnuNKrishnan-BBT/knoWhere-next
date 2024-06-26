import React from 'react'
import styles from './styles.module.css'

function TabSwitcher({
    tabs = [],
    activeTabIndex = 0,
    onChange = null
}) {
    return (
        <div className={`${styles.wrapper}`}>
            {
                tabs.map((obj, index) => obj && <div key={index} className={`${styles.itemCard} ${index == activeTabIndex && styles.active}`} onClick={() => { onChange(index) }}>
                    <label className={`${styles.itmLabel}`} htmlFor="">{obj.title}</label>
                </div>)
            }
        </div>
    )
}

export default TabSwitcher
