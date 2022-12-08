import axios from "axios";
import { tokenData } from "./getTokendata";
// let headers = {};
// if (!tokenData.token) {
//     headers = {
//         Accept: "application/json",
//         "Content-type": "application/json"
//     }
// } else {
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
const instance = axios.create({
    baseURL: `https://agresourcecom.bigscoots-staging.com/wp-json/ag/v1/`,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }
})
instance.interceptors.request.use(
    function (config) {
        const token = JSON.parse(localStorage.getItem("tokenData")) ? JSON.parse(localStorage.getItem("tokenData")).token_data.token : {};

        let TIMESTAMP = Date.now();
        if (token) {
            if (!JSON.parse(localStorage.getItem("timestamp"))) {
                localStorage.setItem("timestamp", JSON.stringify({
                    initial: TIMESTAMP,
                    expiresOn: TIMESTAMP + 1000 * 60 * 15 //15min
                }));
            } else {
                // then, when user access the website again, check the expiresOn, it it's value is bigger than current date
                const EXPIRE_DATE = JSON.parse(localStorage.getItem("timestamp")).expiresOn;
                if (Date.now() >= EXPIRE_DATE) {
                    localStorage.removeItem("tokenData");
                    localStorage.removeItem("timestamp");
                    window.location.href = "";
                    return;
                } else {
                    let expire = Date.now() + 1000 * 60 *15;
                    localStorage.setItem("timestamp", JSON.stringify({
                        initial: Date.now(),
                        expiresOn: expire //15min
                    }));
                }
            }
        }


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