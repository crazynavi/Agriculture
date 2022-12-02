import axios from "axios";
import { tokenData } from "./getTokendata";
// let headers = {};
// console.log(tokenData.token)
// if (!tokenData.token) {
//     console.log("fewfwef");
//     headers = {
//         Accept: "application/json",
//         "Content-type": "application/json"
//     }
// } else {
//     console.log("ffffffff");
//     headers = {
//         Accept: "application/json",
//         "Content-type": "application/json",
//         token: `bearer:${tokenData.token}`
//     }
// }
// export default  axios.create({
//     baseURL: `https://agresource.redcliffeltd.com/wp-json/ag/v1/`,
//     headers
// })
const instance =  axios.create({
    baseURL: `https://agresource.redcliffeltd.com/wp-json/ag/v1/`,
    headers : {
        Accept: "application/json",
        "Content-type": "application/json"
    }
})
instance.interceptors.request.use(
    function (config) {
        const token = JSON.parse(localStorage.getItem("tokenData"))?JSON.parse(localStorage.getItem("tokenData")).token_data.token:{};
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
export default instance;