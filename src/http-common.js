import axios from "axios";

export default axios.create({
    baseURL: `https://agresource.redcliffeltd.com/wp-json/ag/v1/`,    
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }
})