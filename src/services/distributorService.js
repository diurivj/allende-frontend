import axios from 'axios'
const url = "https://backendallende.herokuapp.com/"

export const getOneDistributor = (id) => {
    return axios.get(url + 'distributors/' + id, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const removeDistributor = (dist) => {
    return axios.delete(url + 'distributors/' + dist._id, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const updateDistributor = (dist) => {
    return axios.put(url + 'distributors/' + dist._id, dist, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const getAdminDistributors = () => {
    return axios.get(url + 'distributors', {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const createDistributor = (item) => {
    return axios.post(url + 'distributors', item, {
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