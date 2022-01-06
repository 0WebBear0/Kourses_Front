import axios from 'axios'

const $api = axios.create({
  baseURL: 'http://localhost:8080/',
  responseType: "json",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
})

export default $api
