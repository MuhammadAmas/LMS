import axios from "axios";

// export default async function deleteAccount(url, email) {
//     try {
//         const response = await axios.delete(`${email}`);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }


export default async function deleteAccount(url, email) {
    try {
        const response = await axios.delete(`${url}${email}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
