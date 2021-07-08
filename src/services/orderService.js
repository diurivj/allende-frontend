import axios from 'axios'
const url = "https://backendallende.herokuapp.com/orders/"

// export const getOneProduct = (id) => {
//     return axios.get(url + id, {
//         headers:{
//             "Authorization": getToken()
//         }
//     } )
//     .then(res=>res.data)
//     .catch(e=>e)
// }

// export const removeProduct = (item) => {
//     return axios.delete(url + item._id, {
//         headers:{
//             "Authorization": getToken()
//         }
//     } )
//     .then(res=>res.data)
//     .catch(e=>e)
// }

// export const updateProduct = (item) => {
//     return axios.put(url + item._id, item, {
//         headers:{
//             "Authorization": getToken()
//         }
//     } )
//     .then(res=>res.data)
//     .catch(e=>e)
// }

export const getOrders = (active) => {
    return axios.get(url, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
    .catch(e=>e)
}

export const createOrder = (item) => {
    return axios.post(url, item, {
        headers:{
            "Authorization": getToken()
        }
    } )
    .then(res=>res.data)
}

function getToken() {
    return localStorage.getItem('token')
}