import {ApiService} from "./api.service";

const loadLiveTvChannel = {

    liveTvChannel:async()=> {
        return await ApiService.get("/taxi/livetv").then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchAvailableCountry:async()=> {
        return await ApiService.get("/taxi/livetv/country").then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    fetchChannelByCountry:async(country)=> {
        return await ApiService.get('/taxi/livetv/country/details/'+ country).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    fetchChannelByPopular:async()=> {
        return await ApiService.get('/taxi/livetv/most').then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
};

export {loadLiveTvChannel};





