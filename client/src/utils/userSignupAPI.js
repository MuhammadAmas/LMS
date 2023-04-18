import axios from "axios";

export default async function userSignup(method, url, data) {
    const options = { method: method, url: url, data: data };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}