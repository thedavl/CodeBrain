import decode from 'jwt-decode'
import axios from 'axios'

const REST_ENDPOINT = 'http://localhost:8000'
const AUTH_TOKEN_KEY = 'authToken'

export function loginUser(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            var res = await axios({
                url: `${REST_ENDPOINT}/user/login`,
                method: 'POST',
                data: {
                    email: email,
                    password: password
                }
            })
            setAuthToken(res.data.token);
            await localStorage.setItem("userEmail", res.data.user[0].email);
            await localStorage.setItem("userName", res.data.user[0].name);
            resolve()
        }
        catch (err) {
            console.error('Login Failed')
            reject('Login Failed')
        }
    })
}

export function signupUser(email, password, name) {
    return new Promise(async (resolve, reject) => {
        try {
            var res = await axios({
                url: `${REST_ENDPOINT}/user/signup`,
                method: 'POST',
                data: {
                    email: email,
                    password: password,
                    name: name
                }
            })
            console.log(res);
            resolve()
        }
        catch (err) {
            console.error('Caught an error during login:', err)
            reject(err)
        }
    })
}

export function logoutUser() {
    clearAuthToken()
}

export function setAuthToken(token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY)    
}

export function clearAuthToken() {
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn() {
    let authToken = getAuthToken()
    return !!authToken && !isTokenExpired(authToken)
}

export function getUserInfo() {
    if (isLoggedIn()) {
        return decode(getAuthToken())
    }
}

function getTokenExpirationDate(encodedToken) {
    let token = decode(encodedToken)
    if (!token.exp) {
        return null
    }
  
    let date = new Date(0)
    date.setUTCSeconds(token.exp)
  
    return date
}
  
function isTokenExpired(token) {
    let expirationDate = getTokenExpirationDate(token)
    return expirationDate < new Date()
}