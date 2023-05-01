import axios from "axios";

export default async function request(method, url) {
    const options = { method: method, url: url };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

