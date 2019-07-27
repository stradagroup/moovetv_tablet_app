import {ApiService} from "./api.service";

const loadCategory = {

    fetch:async()=> {
        return await ApiService.get("/taxi/category/list").then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchDetails:async({uuid})=> {
        return await ApiService.get("/taxi/category/details", {uuid:uuid}).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },
};

export {loadCategory};





