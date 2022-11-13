import axios from "axios";

export default axios.create({
    baseURL: "http://localhost/agresource/wp-json/ag/v1/",    
    headers: {
        "Content-type": "application/json"
    }
})