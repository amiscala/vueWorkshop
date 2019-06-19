<template>
  <div class="home">
    <select v-model="selectedCountry">
      <option :value="null">Selecione o Pais</option>
      <option v-for="country in countries" :key="country.name" :value="country">{{country.name}}</option>
    </select>
      <div class="country-info" v-if="selectedCountry">
        {{selectedCountry.name}}
      </div>
      <hr>
      <input type="text" placeholder="Title" v-model="title">
      <input type="text" placeholder="body" v-model="body">
      <button @click="createPost">POST</button>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from "vuex";
import {SET_SELECTED_COUNTRY, SET_POST} from "@/store/home-mutations-type";


export default {
  name: "home",
  beforeMount(){
    this.loadCountries();
  },
  data(){
    return{
      title : "",
      body : ""
    };
  },

  computed:{
    ...mapGetters("home",[
      "countries",
      "counter",
      "post"
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
      "loadCountries",
      "sendPost"
    ]),
    ...mapMutations("home",[
      SET_SELECTED_COUNTRY
    ]),
    createPost(){
      const newPost = {
        userId: 1,
        title: this.title,
        body: this.body
      }
      this.sendPost(newPost);
    }
  }
};
</script>
