import { useEffect, useState } from 'react'

const useDebounce = (value, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const debounceFn = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(debounceFn);
        }
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce
