import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'

function InputBoxes({
    boxCount = 4,
    maxCharPerBox = 3,
    inputTypes = ['text', 'number', 'text', 'number'],
    onComplete = null
}) {
    const allowedText = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const allowedNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const [values, setValues] = useState(Array(boxCount).fill(''));
    const [indexInFocus, setIndexInFocus] = useState(0)
    const inputRefs = useRef([]);

    useEffect(() => {
        //Set initial focus
        if (inputRefs.current[indexInFocus]) {
            inputRefs.current[indexInFocus].focus();
        }


        if (inputRefs.current[indexInFocus].value.length == maxCharPerBox) {
            if (inputRefs.current[indexInFocus + 1]) {
                inputRefs.current[indexInFocus + 1].focus()
                setIndexInFocus(indexInFocus + 1)
            } else {
                inputRefs.current[indexInFocus].blur()
                onComplete ? onComplete() : null
            }
        }
    }, [values]);

    const handleChange = (index, e) => {
        const newValues = [...values];
        if (e.target.value)
            newValues[index] = e.target.value;
        setValues(newValues);
    };

    return (
        <div className={`${styles.wrapper}`}>
            {Array.from({ length: boxCount }).map((_, index) => (
                <input
                    key={index}
                    ref={el => inputRefs.current[index] = el}
                    className={`${styles.inputBox}`}
                    type={inputTypes[index] || 'text'}
                    value={values[index]}
                    onChange={e => handleChange(index, e)}
                />
            ))}
        </div>
    )
}

export default InputBoxes
