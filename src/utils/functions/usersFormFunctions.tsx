export const checkEmailRepeat = (users: any, initialValues: any, value: any) =>{
    let _repeat = false
    users.map((user: any, index: any) => {
        user.email === value?.email && value?.email !== initialValues.email
            ? _repeat = true
            : null
    })
    return _repeat
}