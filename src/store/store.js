import Vue from 'vue'
import Vuex from 'vuex'
import Category from './modules/category/CATEGORY'
import Driver from './modules/driver/drivers'
import Country from './modules/livetv/LIVETV'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: '**-moove-data-00-**',
  storage: localStorage
});

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Category: Category,
    Driver: Driver,
    Country:Country,
  },
  plugins: [vuexPersist.plugin]
});
