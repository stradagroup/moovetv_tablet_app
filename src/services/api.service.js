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

    getLiveScoreUrl() {
        return ApiService.livescore;
    },

    getLiveScoreKey() {
        return '&APIkey=10a8b077995ba345b03641bc73ade7450b785252223b0f5a885579f9815d8b99'
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
    fetcher(resource, data) {
        return http.get(resource, data)
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
