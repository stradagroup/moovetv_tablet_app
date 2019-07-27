import {ApiService} from "./api.service";
import store from 'store';
const loadContent = {
    fetchLatest: async () => {
        let url="/taxi/featured";
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchDetails: async ({uuid}) => {
        let url="/taxi/category/details/" + uuid;
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    fetchContent: async ({uuid, type}) => {
        let url;
        if (type === 'all') {
            url = "/taxi/content/" + uuid;
        } else {
            url = "/taxi/content/" + uuid + "?type=" + type;
        }
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    fetchContentDetails: async ({uuid}) => {
        let url="/taxi/content/details/" + uuid;
        return await ApiService.get(url).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
    addToCache:function(url,data){
        data.expires=new Date().getTime()/1000
        return store.set(url,data);
    },
    checkCache:function (url,callback) {
        let res=store.get(url);
        if(res){
           return callback(null,res)
        }
        if (res.expires < new Date().getTime()/1000) {
           return callback({message:"expired"},null)
        }
        else {
           return callback({message:"not found"},null)
        }
    }
};

export {loadContent};





