const useAccessTokenStorage = () => {
    const KEY = "Access-token";

    const setAccessToken = (token: string) => {
        localStorage.setItem(KEY, token);
    };

    const getAccessToken = () => {
        return localStorage.getItem(KEY);
    }

    return {
        setAccessToken,
        getAccessToken,
    }
}