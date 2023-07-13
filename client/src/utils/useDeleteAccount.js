import deleteAccount from './deleteAccountAPI';

export default function useDeleteAccount(email) {
    async function deleteData() {
        const result = await deleteAccount(email);
        return result;
    }
    return deleteData();
}
