import { useFetch } from '../helpers/useFetch'

const API_consult = () => {

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

    return(
        <ul>
            {error && <li><b>Error: {error}</b></li>}
            {loading && <li><h3>Cargando !!</h3></li>}
            {data?.map(el => (<li key={el.id}>{el.name}</li>) )}
        </ul>
    )
}

export { API_consult }