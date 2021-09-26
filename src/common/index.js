import http from "./../Services/httpService";

let TOKEN = "token";


export function LoginUtil(jwt) {
    http.setJwt(getJwt());
    return localStorage.setItem(TOKEN, jwt);
}

export function LogoutUtil() {
    localStorage.removeItem(TOKEN);
    localStorage.clear();
}


export function isLogin() {
    try {
        const JWT = localStorage.getItem(TOKEN);
        return JWT;
    } catch (error) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem("token");
}