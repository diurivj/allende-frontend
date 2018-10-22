import axios from 'axios'
const url = "https://backendallende.herokuapp.com/promos/"

export const getOnePromo = (id) => {
    return axios.get(url + id, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
}

export const removePromo = (item) => {
    return axios.delete(url + item._id, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
}

export const updatePromo = (item) => {
    return axios.put(url + item._id, item, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
}

export const getPromos = () => {
    return axios.get(url, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
}

export const createPromo = (item) => {
    return axios.post(url, item, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
}

function getToken() {
    return localStorage.getItem('access_token')
}