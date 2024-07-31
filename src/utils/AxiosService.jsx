import axios from "axios";

const AxiosService = axios.create({
    baseURL:"https://66a9c65a613eced4eba62a43.mockapi.io",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService