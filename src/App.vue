<template>
  <div class="main">
      <SideNav />

    <router-view />
  </div>
</template>


<script>
import SideNav from "./components/SideNav.vue";
export default {
  components: {
    SideNav,
  },
};
</script>