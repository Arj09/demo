import axios from "axios";

export const Http = axios.create({
    baseURL:'https://api.punkapi.com'
})