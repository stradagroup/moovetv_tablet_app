import {ApiService} from "./api.service";

const loadAds = {
    fetch: async (type, size, limit=1) => {

        let url = `/ads/serve/static/${type}?size=${size}&limit=${limit}`;
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    video: async (uuid,limit=1,) => {

        let url = `/ads/serve/video?content=${uuid}&limit=${limit}`;
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    audio: async (uuid,limit=1,) => {
        let url = `/ads/serve/audio?content=${uuid}&limit=${limit}`;
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    tracker: async (url) => {
        return await ApiService.post(url,{}).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },



};

export {loadAds};





