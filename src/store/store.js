import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 1000,
  },
  modules:{
    stocks
  }
});
