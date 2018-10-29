import axios from 'axios'
const url = "https://backendallende.herokuapp.com/"
const url2 = "https://backendallende.herokuapp.com/distributors/"

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


//servicios para el distribuidor

//su propio perfil
export const getSelfProfile = () => {
    return axios.get(url2 + "profile", {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

//modificar su propio perfil
export const updateSelfProfile = (profile) => {
    return axios.post(url2 + "profile", profile,  {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

function getToken() {
    return localStorage.getItem('token')
}