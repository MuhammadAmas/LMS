import request from './getUserCoursesAPI';


export default function useFetchUsersData(method, url) {
    async function fetchData() {
        const result = await request(method, url);
        const data = await result
        return data;
    }
    return fetchData();
}

