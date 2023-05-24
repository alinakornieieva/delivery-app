import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://delivery-app-api-lsrk.onrender.com'
})

export default instance