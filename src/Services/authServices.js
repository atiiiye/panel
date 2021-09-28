import { getJwt } from '../common'
import http from "./httpService";
import config from "./../config.json";


export function LoginApi(email, password) {
    return http.podt(
        config.Login,
        JSON.stringify({
            email,
            password
        })
    )
}