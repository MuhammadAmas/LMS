import deleteCourse from '../utils/deleteCourseAPI';

export default function useDeleteCourse(url, id) {
    async function deleteData() {
        const result = await deleteCourse(url, id);
        return result;
    }
    return deleteData();
}
