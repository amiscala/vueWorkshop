<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button-switch v-model="isActive" />
    <p v-if="isActive">Oi Samir</p>
  </div>
</template>

<script>
import ButtonSwitch from "@/components/ButtonSwitch";

export default {
  name : "about",
  data(){
    return{
      isActive:true
    };
  },
  components:{
    ButtonSwitch
  }
}
</script>

