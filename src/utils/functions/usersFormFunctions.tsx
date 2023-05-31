export const checkEmailRepeat = (users: any, initialValues: any, value: any) =>{
    let _repeat = false
    users.map((user: any) => {
        user.email === value?.email && value?.email !== initialValues
            ? _repeat = true
            : null
    })
    return _repeat
}