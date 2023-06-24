import request from './getAllCoursesAPI';


export default function useFetchAllData(method, url) {
    async function fetchData() {
        const result = await request(method, url);
        const data = await result
        return data;
    }
    return fetchData();
}

