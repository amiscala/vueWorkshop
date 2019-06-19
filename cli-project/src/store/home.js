import axios from "axios";

import {
  SET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  SET_POST
} from "./home-mutations-type";

const state = {
  countries: [],
  selectedCountry: null,
  counter: 0,
  post: null
};

const mutations = {
  [SET_COUNTRIES](state, countries) {
    state.countries = countries;
  },
  [SET_SELECTED_COUNTRY](state, selected) {
    state.selectedCountry = selected;
  },
  [INCREMENT_COUNTER](state) {
    state.counter++;
  },
  [DECREMENT_COUNTER](state) {
    state.counter--;
  },
  [SET_POST](state, post) {
    state.post = post;
  }
};
const actions = {
  async loadCountries({ commit }) {
    const { data } = await axios.get("/all");
    commit(SET_COUNTRIES, data);
    commit(SET_SELECTED_COUNTRY, data[0]);
  },
  async sendPost({ commit }, post) {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    commit(SET_POST, data);
  }
};
const getters = {
  countries: state => state.countries,
  selectedCountry: state => state.selectedCountry,
  counter: state => state.counter,
  countryNames: state => state.countries.map(c => c.name),
  post: state => state.post
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
