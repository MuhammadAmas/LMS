import axios from "axios";

export default async function deleteCourse(url, id) {
    try {
        const response = await axios.delete(`${url}${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
