<template>
  <nav id="nav">
    <template v-for="(item,index) in menuItems">
      <router-link :to="item.path" :key="item.path">{{item.name}}</router-link>
      {{index < menuItems.length - 1 ? ' | ' : ''}}
    </template>
  </nav>
</template>


<script>
export default {
  name: "main-menu",
  data() {
    return {
      menuItems: [
        {
          name: "home",
          path: "/"
        },
        {
          name: "about",
          path: "/about"
        }
      ]
    };
  }
};
</script>
