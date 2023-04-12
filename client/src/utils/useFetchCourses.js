import request from '../utils/getCoursesAPI';


export default function useFetchData(method, url) {
    async function fetchData() {
        const result = await request(method, url);
        const data = await result
        return data;
    }
    return fetchData();
}

