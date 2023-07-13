// import deleteAccount from './deleteAccountAPI';

// export default function useDeleteAccount(email) {
//     async function deleteData() {
//         const result = await deleteAccount(email);
//         return result;
//     }
//     return deleteData();
// }



import deleteAccount from './deleteAccountAPI';

export default function useDeleteAccount(email) {
    async function deleteData() {
        try {
            const result = await deleteAccount("http://localhost:3000/teacher/", email);
            console.log(result); // Optional: Log the result
            // Additional logic after successful deletion
        } catch (error) {
            console.error(error);
            // Error handling logic
        }
    }
    return deleteData();
}
