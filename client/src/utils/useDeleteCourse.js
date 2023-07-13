import deleteCourse from '../utils/deleteCourseAPI';

export default function useDeleteCourse(id) {
    async function deleteData() {
        const result = await deleteCourse(id);
        return result;
    }
    return deleteData();
}
