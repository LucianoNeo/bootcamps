import axios from "axios";

const Api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})


export default Api