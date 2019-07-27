
import {loadCategory} from '../../../services/loadCategory.service';

const actions = {
    loadCategory: async(context, payload) =>{
        return await loadCategory.fetch().then((res)=>{
            context.commit('GET_CATEGORY', res, payload);
            return true;
        }).catch((err) =>{
            window.console.log(err);
            return false;
        })
    },
};

export {actions};
