import jwt from 'jsonwebtoken';
import axios from 'axios';
import config from '../config';

const {user:USER_KEY, token:JWT_KEY} = config.localStorage;

const AuthService = {
    login: (login, password) => (
        axios.post(`api/auth/login`, {
                login,
                password,
        }) 
    ),

    logout(){
        this.removeUser();
        this.removeToken();
    },

    register: (login, password) => (
        axios.post(`api/auth/register`, {
                login, 
                password, 
            })
    ),

    axios(method, url, data, options = {}){
        return axios({
            method,
           // url: `${config.server.host}/${url}`,
            url: `/${url}`,
            headers:{
                Authorization: this.getToken()
            },
            data,
            ...options
        })
    },

    isLogged(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    },

    isTokenExpired(token){
        const decoded = jwt.decode(token.replace('Bearer ', ''));
        console.log(decoded, Date.now()/1000);
        if (!decoded) return true;

        if (decoded.exp  <= Date.now() / 1000)
            return true;

        return false;

    },

    setToken(token){
        localStorage.setItem(JWT_KEY, token);
    },

    setUser(user){
        const stringified = JSON.stringify(user);
        localStorage.setItem(USER_KEY, stringified);
    },

    getUser(){
        try{
            return JSON.parse(localStorage.getItem(USER_KEY));
        }
        catch(err){
            console.error(err);
            this.removeUser();
            return null
        }
        
    },

    removeUser(){
        localStorage.removeItem(USER_KEY);
    },

    getToken(){
        return localStorage.getItem(JWT_KEY);
    },

    removeToken(){
        localStorage.removeItem(JWT_KEY);
    },  
}

export default AuthService;
