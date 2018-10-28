import axios from 'axios'
const url = "https://backendallende.herokuapp.com/"

export const getOneCliente = (id) => {
    return axios.get(url + 'clientes/' + id, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
        .catch(e=>e)
}

export const removeCliente = (dist) => {
    return axios.delete(url + 'clientes/' + dist._id, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
        .catch(e=>e)
}

export const updateClientes = (dist) => {
    return axios.put(url + 'clientes/' + dist._id, dist, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
        .catch(e=>e)
}

export const getDistClientes = () => {
    return axios.get(url + 'clientes', {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
        .catch(e=>e)
}

export const createClientes = (item) => {
    return axios.post(url + 'clientes', item, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
        .catch(e=>e)
}

function getToken() {
    return localStorage.getItem('access_token')
}