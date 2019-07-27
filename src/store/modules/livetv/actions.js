import {loadLiveTvChannel} from '../../../services/LiveTv.service';

const actions = {
    loadCountry: async(context, payload) =>{
        return await loadLiveTvChannel.fetchAvailableCountry().then((res)=>{
            context.commit('SET_COUNTRY', res, payload);
            return true;
        }).catch((err) =>{
            window.console.log(err);
            return false;
        })
    },
};

export {actions};
