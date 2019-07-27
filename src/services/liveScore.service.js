import {ApiService} from "./api.service";
import store from 'store';
const liveScore = {
    fetchLeague: async ({id}) => {
        let url = "get_leagues&country_id=" + id + ApiService.getLiveScoreKey();
        return await ApiService.customRequest({
            method: "GET",
            url: ApiService.getLivescoreUrl() + url}).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchCountry: async () => {
        let url = "get_countries" + ApiService.getLiveScoreKey();
        return await ApiService.customRequest({
            method: "GET",
            url: ApiService.getLivescoreUrl() + url
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchStandings: async ({id}) => {

        let url = "get_standings&league_id=" + id + ApiService.getLiveScoreKey();

        return await ApiService.customRequest({
            method: "GET",
            url: ApiService.getLivescoreUrl() + url
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

    fetchFixture: async ({id, from, to}) => {
        let val = "get_events&from=" + from + "&to=" + to ;

        let url =  val + ApiService.getLiveScoreKey();

        return await ApiService.customRequest({
            method: "GET",
            url: ApiService.getLivescoreUrl() + url
        }).then((res) => {
            return Promise.resolve(res.data);
        }).catch((error) => {
            return Promise.reject(error.response.data);
        });
    },

};

export {liveScore};





