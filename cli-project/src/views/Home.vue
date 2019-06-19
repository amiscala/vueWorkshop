<template>
  <div class="home">
    <select v-model="selectedCountry">
      <option :value="null">Selecione o Pais</option>
      <option v-for="country in countries" :key="country.name" :value="country">{{country.name}}</option>
    </select>
      <div class="country-info" v-if="selectedCountry">
        {{selectedCountry.name}}
      </div>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from "vuex";
import {SET_SELECTED_COUNTRY} from "@/store/home-mutations-type";


export default {
  name: "home",
  beforeMount(){
    this.loadCountries();
  },
  computed:{
    ...mapGetters("home",[
      "countries",
      "counter"
    ]),
    selectedCountry: {
      get() {
        return this.$store.state.home.selectedCountry;
      },
      set(value){
        this[SET_SELECTED_COUNTRY](value);
      }
    }
  },
  methods: {
    ...mapActions("home", [
      "loadCountries"
    ]),
    ...mapMutations("home",[
      SET_SELECTED_COUNTRY
    ])
  }
};
</script>
