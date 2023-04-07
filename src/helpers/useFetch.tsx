import { useEffect, useState} from 'react'


const useFetch= (url: string) => {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        // const abortController: any = new AbortController
        // setController(abortController)
        setLoading(true)

        fetch(url)
            .then((res) => res.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

            // return () => abortController.abort()
    }, [])

    return { data, loading, error }
}


export {  useFetch }