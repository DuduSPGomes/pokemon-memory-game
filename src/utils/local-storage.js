export const addToLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item))

export const getLocalStorage = (key) => localStorage.getItem(key)