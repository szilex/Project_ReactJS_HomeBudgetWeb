import axios from 'axios';
import AuthService from './AuthService'

const API_URL = "http://localhost:8080";

export const UserService = {
    getCurrentUser
}

function getCurrentUser() {
    return axios
            .get(API_URL + '/user', {
                headers: {
                    'Authorization': AuthService.currentTokenValue
                }
            })
            .then(response => {
                console.log(response)
                if (response.status !== 200) {
                    if ([401, 403].indexOf(response.status) !== -1) {
                        AuthService.logout();
                        return Promise.reject(response);
                    }
                    const data = response.data && JSON.parse(response.data);
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                return response.data;
            }, (error) => {
                console.log(error)
                return Promise.reject(error);
            })
}

export default UserService;