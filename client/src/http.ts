import axios from "axios";

export default axios.create({
    baseURL: "http://smart.local/api",
    headers: {
        "Content-type": "application/json"
    },
});
