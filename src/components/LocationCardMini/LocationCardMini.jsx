import React from 'react'
import style from './styles.module.css'
import InfoInCircle from '../InfoInCircle/InfoInCircle'
import BrandStyleText from '../BrandStyleText/BrandStyleText'

function LocationCardMini({
    timestamp = "",
    mainText = "Unidentified Location",
    subText1 = "Unidentified Road",
    subText2 = "Unidentified Country",
    parking = false,
    isLast = false
}) {
    return (
        <div className={style.wrapper}>
            <div className={style.timeHolder}>
                <InfoInCircle
                    type={parking ? 'parking' : 'timestamp'}
                    text={timestamp}
                    extendLeg={!isLast}
                />
            </div>
            <div className={style.infoHolder}>
                <p className={style.locationMain}><BrandStyleText text={mainText} /></p>
                <p className={style.locationSub1}>{subText1}</p>
                <p className={style.locationSub2}>{subText2}</p>
            </div>
        </div>
    )
}

export default LocationCardMini
