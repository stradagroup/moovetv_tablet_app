import {ApiService} from "./api.service";
import store from 'store';

const newsFeed = {
    fetchPunch: async (url) => {
        return await ApiService.customRequest({
            method: "GET",
            url: url
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    }
   , fetchSekere: async () => {
        return await ApiService.customRequest({
            method: "GET",
            url: 'http://www.sekerenews.com/wp-json/wp/v2/posts/'
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    fetchNews: async () => {
        let url = "/taxi/news";
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    fetcher: async (url) => {
        let _url = "/utils/fetcher/" + btoa(url);
        return await ApiService.get(_url).then((res) => {
            return Promise.resolve(JSON.parse(res.data.data));
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },


};

export {newsFeed};





