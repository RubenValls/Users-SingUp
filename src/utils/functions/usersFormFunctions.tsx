export const checkEmailRepeat = (users: any, value: any) =>{
    let _repeat = false
    users.map((user: any) => {
        console.log(user, value)
        user.email === value?.email && user?.id !== value.id
            ? _repeat = true
            : null
    })
    return _repeat
}