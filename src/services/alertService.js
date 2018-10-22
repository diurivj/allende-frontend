import axios from 'axios'
const url = "https://backendallende.herokuapp.com/"

export const removeAlert = (alert) => {
    return axios.delete(url + 'alerts/' + alert._id, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const updateAlert = (alert) => {
    return axios.put(url + 'alerts/' + alert._id, alert, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const getAdminAlerts = () => {
    return axios.get(url + 'alerts/admin', {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const createAlert = (item) => {
    return axios.post(url + 'alerts', item, {
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