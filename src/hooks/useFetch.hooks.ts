import {useEffect, useState} from 'react'

export interface UseEffectProps {
    url: string,
 }

export const useFetch = <T>({url}: UseEffectProps) => {
 
    const [data, setData] = useState<T | null>(null);
    const [hasError, setHasError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const fetchData = async (e?: React.FormEvent<HTMLFormElement>) => {

        e?.preventDefault();

        setIsFetching(true);
        try {
            const response = await fetch(url);
            const dataBuffer = await response.json();
            setData(dataBuffer);
            setIsFetching(false);
        } catch (e) {
            setHasError(true);
            setIsFetching(false);
        }
     }

     useEffect(() => {
        (async () => {
            await fetchData();
        })();
     }, [])
     
         return {
            data,
            fetchData,
            hasError,
            isFetching
    }

}
