/* eslint-disable no-console */
import axios from "axios"
import queryString from "query-string"
import Cookie from "js-cookie"
const axiosClient = axios.create({
  baseURL: "",
  timeout: 20000,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(
  config => {
    //Handle token here ...
    const token = Cookie.get("token")
    if (token)
      config.headers.authorization = `Bearer ${token}`

    return config
  },
  err => {
    console.error(err)
  }
)
axiosClient.interceptors.response.use(
  res => {
    if (res && res.data) return res.data
    return res
  },
  err => {
    //Handle err
    // eslint-disable-next-line no-console
    console.error(err)
  }
)

export default axiosClient
