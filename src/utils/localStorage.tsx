
export const getInitialValues = () => {
    const values = localStorage.getItem(import.meta.env.VITE_LOCALSTORAGE_KEY)

    return values ? values : []

}

export const updateLocalStorage = (data: any) => {
    localStorage.setItem(import.meta.env.VITE_LOCALSTORAGE_KEY, data)
}