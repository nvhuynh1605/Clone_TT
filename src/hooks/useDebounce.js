import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDeboundValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboundValue(value), delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
