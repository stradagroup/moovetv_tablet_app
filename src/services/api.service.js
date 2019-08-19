import axios from 'axios'
import {throttleAdapterEnhancer} from 'axios-extensions';

const http = axios.create({
    headers: {'Cache-Control': 'no-cache'},
    adapter: throttleAdapterEnhancer(axios.defaults.adapter, {threshold: 10 * 1000})
});

const ApiService = {
    baseUrl: '',
    init(baseURL) {
        ApiService.baseUrl = baseURL;
        http.defaults.baseURL = baseURL;

    },
    livescore(url) {
        ApiService.livescore = url;
    },

    getLiveScoreUrl(){
        return ApiService.livescore;
    },

    getLiveScoreKey(){
        return '&APIkey=a803a6cd8486d9191a60bfaa6723b97fc3391061bbcb99c8f5b2caaa76b92796'
    },

    getBaseUrl() {
        return ApiService.baseUrl;
    },
    setHeader(token) {
        http.defaults.headers.common["Authorization"] = "Bearer " + token;
    },
    removeHeader() {
        http.defaults.headers.common = {}
    },

    get(resource) {
        return http.get(resource)
    },

    post(resource, data) {
        return http.post(resource, data)
    },

    put(resource, data) {
        return http.put(resource, data)
    },

    delete(resource) {
        return http.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data) {
        return http(data)
    }
};

export {ApiService};
