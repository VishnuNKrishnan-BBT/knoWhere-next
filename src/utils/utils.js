export const toggleFilter = (currentVal, modifierFn) => {
    navigator.vibrate(50)
    modifierFn(!currentVal)
}

export const handleQueryChange = (e, haystack = [], haystackModifierFn = null, queryModifierFn = null) => {
    queryModifierFn(e.target.value)

    const returnValue = haystack.filter(
        obj => obj.licenseNumber.toLowerCase().includes(e.target.value.toLowerCase()) ||
            obj.trackerId.toLowerCase().includes(e.target.value.toLowerCase()) ||
            obj.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
            obj.driverName.toLowerCase().includes(e.target.value.toLowerCase())
    )
    haystackModifierFn(returnValue)
    return returnValue
}