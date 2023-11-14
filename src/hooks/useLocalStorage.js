import { useState, useEffect } from "react";

/**
 * Custom Hook to save user info like token and username into localStorage
 * 
 * This fucntion creates a user state and looks in localStorage for current user info, if cannot find it, assign null
 * when user info chnages, useEffect either cleans it or updates localStorage
 * 
 *   const [user, setUser] = useLocalStorage("userToken");
 */

const useLocalStorage = (localStorageKey, initialValue = null) => {
    let initialUserValue = initialValue
    if(localStorage.getItem(localStorageKey)) {
        try {
            initialUserValue = JSON.parse(localStorage.getItem(localStorageKey))
        } catch (e) {
            console.debug(e)
        }
    }

    const [user, setUser] = useState(initialUserValue)

    useEffect(() => {
        if(user === null) {
            localStorage.removeItem(localStorageKey)
        } else {
            localStorage.setItem(localStorageKey, JSON.stringify(user))
        }
    }, [localStorageKey, user])

    return [user, setUser]
}

export default useLocalStorage;