export const useRegisterTokenStorage = () => {
    const KEY = "registerToken";

    const setRegisterToken = (token: string) => {
        localStorage.setItem(KEY, token);
    };

    const getRegisterToken = () => {
        return localStorage.getItem(KEY);
    };

    return {
        setRegisterToken,
        getRegisterToken
    }
}