import axios from 'axios'
const url = "https://backendallende.herokuapp.com/clients/"

export const getClientsOrders = () => {
    return axios.get(url + 'orders', {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
        // .catch(e=>e)
}

export const saveOrder = (order) => {
    if(order._id) return updateOrder(order)
    return createOrder(order)
}

function createOrder(order){
    return axios.post(url + "orders", order,{
        headers:{
            "Authorization": getToken()
        }
    })
    .then(res=>res.data)
}

function updateOrder(order){
    return axios.put(url + "orders/" + order._id, order, {
        headers:{
            "Authorization": getToken()
        }
    })
    .then(res=>res.data)
}

export const getOneClient = (id) => {
    return axios.get(url + id, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
}

export const removeClient = (dist) => {
    return axios.delete(url + dist._id, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
}

export const updateClientes = (dist) => {
    return axios.put(url + dist._id, dist, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
}

export const getClients = () => {
    return axios.get(url, {
        headers:{
            "Authorization": getToken()
        }
    } )
        .then(res=>res.data)
}

export const saveClient = (item) => {
    if(!item._id) return createClient(item)
    return updateClient(item)
}

function updateClient(item){
    return axios.put(url + item._id, item,{
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
}
function createClient(item){
    return axios.post(url, item, {
        headers:{
            "Authorization": getToken()
        }
    })
    .then(res=>res.data)
}

function getToken() {
    return localStorage.getItem('token')
}