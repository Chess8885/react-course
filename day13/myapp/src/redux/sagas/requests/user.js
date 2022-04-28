import axios from 'axios'

export function requestGetUser() {
    return axios.request({
        method: "get",
        user: "https://my-json-server.typicode.com/atothey/demo/user"
    });
}