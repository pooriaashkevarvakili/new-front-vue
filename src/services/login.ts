import axios from '@/services/axios';

async function authServiceLogin(payload: any) {
    payload.model = 'User';
    payload.device_type = 1;
    try {
        const { data } = await axios.post('api/authentication/token/get/', payload);
        if (data.error) throw data;
        return data;
    } catch (e) {
        throw e;
    }

}


function tokenChecker() {
    return localStorage && localStorage.getItem('auth_token') != undefined;
}


function setAuthToken(token: string) {
    localStorage.setItem('auth_token', token)
}

function setUserData(data: object) {
    localStorage.setItem('auth_user', JSON.stringify(data))
}

function getToken() {
    return localStorage.getItem('auth_token')
}


function getUserData() {
    const data = localStorage.getItem('auth_user');
    if (!data) return {};
    return JSON.parse(data)
}

export { authServiceLogin, tokenChecker, setAuthToken, setUserData, getToken, getUserData }
