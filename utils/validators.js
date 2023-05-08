export const requiredField = value => {
    if (value) return undefined
    return 'Field is required'
}