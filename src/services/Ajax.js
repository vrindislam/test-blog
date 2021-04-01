import axios from "axios";

class Ajax {

    static async get(endpoint) {
        const { data } = await axios.get(`https://bloggy-api.herokuapp.com${endpoint}`)

        return data
    }

    static async post(endpoint, value) {
        const { data } = await axios.post(`https://bloggy-api.herokuapp.com${endpoint}`, value)

        return data;
    }

    static async put(endpoint, id, updatedObject) {
        const { data } = await axios.put(`https://bloggy-api.herokuapp.com${endpoint}/${id}`, updatedObject)
        return data;
    }

    static async deleteRequest(endpoint, id) {
        const { data } = await axios.delete(`https://bloggy-api.herokuapp.com${endpoint}/${id}`)

        return data;
    }
}

export default Ajax;