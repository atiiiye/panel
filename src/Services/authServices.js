import { getJwt } from '../common'
import http from "./httpService";
import config from "./../config.json";


export function LoginApi(email, password) {
    return http.post(
        config.Login,
        JSON.stringify({
            email,
            password
        })
    )
}

export function UsersList() {
    return http.get(
        config.UsersList,
    )
}