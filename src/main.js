import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {ApiService} from "./services/api.service";
import store from './store/store';
import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import 'swiper/dist/css/swiper.css'
import 'video.js/dist/video-js.css'

// import {dom} from '@fortawesome/fontawesome-svg-core'
import {dom, library} from '@fortawesome/fontawesome-svg-core'
import Slick from 'vue-slick';
import VueCarousel from 'vue-carousel';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

export const serverBus = new Vue();

Vue.component('font-awesome-icon', FontAwesomeIcon);

window.$ = require('jquery')
window.JQuery = require('jquery')

window.toastr = require('toastr');


Vue.use(VModal);
Vue.config.productionTip = false;

ApiService.init('https://ivoholdings.com/api/v1');
ApiService.livescore('https://apiv2.apifootball.com/?action=');

if (store.dispatch('isLoggedIn'))
    ApiService.setHeader(store.getters.GET_AUTH_TOKEN);
else
    store.dispatch('UNSET_USER').then(() => {
    });

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueToastr2);
Vue.use(VueAwesomeSwiper);

Vue.use(VueCarousel);

Vue.config.productionTip = false;
dom.watch();

export default {
    // components: {carousel},
}
Vue.mixin({
    methods: {
        showBusy: function (message) {
            document.getElementById("busyUI").style.display = flex;
        },
        hideBusy: function () {
            document.getElementById("busyUI").style.display = none;
        },
        goBack(){
            router.go(-1) ;
        },
        truncate(str,len){
            if (!str) return;
            return str.substring(0,len)+"...";
        },
        capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1)
    }
});


Vue.directive('img-load', {
    bind: function (el, binding, vnode) {
        let s = JSON.stringify;
        window.console.log(
            'name: ' + s(binding.name) + '<br>' +
            'value: ' + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: ' + s(binding.arg) + '<br>' +
            'modifiers: ' + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', '));
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
    components: {Slick},
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
        };
    },

}).$mount('#app');
