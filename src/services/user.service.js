import {ApiService} from "./api.service";

const userService = {
    login: ({email, password}) => {
        return new Promise(function (resolve, reject) {
            ApiService.post('/oauth/token', {email: email, password: password, client_id: 4}).then(async (res) => {
                let token = res.data.token;
                resolve(token);
            }).catch((error) => {
                reject(error.response.data);
            });
        });
    },
    authorize: async (token) => {
        return await ApiService.customRequest({
            headers: {'Authorization': 'Bearer ' +token},
            method: "GET",
            url: ApiService.getBaseUrl() + "/oauth/token/validate"
        }).then((res) => {
            return Promise.resolve(res.data.message);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
};

export {userService};
