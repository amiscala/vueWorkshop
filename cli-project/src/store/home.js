import axios from "axios";

import{
  SET_COUNTRIES,
  SET_SELECTED_COUNTRY,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from "./home-mutations-type"


const state = {
  countries: [],
  selectedCountry: null,
  counter: 0
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
  }
};
const actions = {
  async loadCountries({ commit }) {
    const { data } = await axios.get("/all");
    commit(SET_COUNTRIES, data);
    commit(SET_SELECTED_COUNTRY, data[0]);
  }
};
const getters = {
  countries: state => state.countries,
  selectedCountry: state => state.selectedCountry,
  counter: state => state.counter,
  countryNames: state => state.countries.map(c => c.name)
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
