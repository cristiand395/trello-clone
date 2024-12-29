import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
    try {
        const item = localStorage.getItem(key);
        return item !== null ? JSON.parse(item) : initialValue; 
    } catch (error) {
        return initialValue;
    }});

    const setValue = (value: any) => {
        try {
            const valueToStore = 
                typeof value === 'function' 
                ? value(storedValue) 
                : value;
            if (valueToStore === undefined) {
                console.warn(
                    `Intentaste guardar un valor undefined para la clave ${key}. Esto no está permitido.`
                );
                return;
                }
            setStoredValue(valueToStore);
            localStorage.setItem(key, 
                typeof valueToStore === 'string' 
                ? valueToStore 
                : JSON.stringify(
                valueToStore));
            console.log(`Guardado ${key} en localStorage:`, valueToStore);
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}

export default useLocalStorage;