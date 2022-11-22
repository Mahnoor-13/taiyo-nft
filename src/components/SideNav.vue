<template>
  <div class="sideNav">
    <div class="sideNav2">
      <div class="sideNav-top">
        <img class="taiyo-logo" src="@/assets/images/taiyo-logo.png" />
        <div class="text-center">
          <h1
            class="text-dela-gothic-one text-uppercase m-0 hero-line-1 glitch"
            data-text="Meet The"
          >
            MEET THE
          </h1>
          <h1 class="text-dela-gothic-one hero-line-2" data-text="Pilots">
            PILOTS
          </h1>
        </div>
        <p class="powered-by">Powered by Blocksmith Labs</p>
      </div>

      <div>
        <ul class="menu">
          <li @click="handleCloseMenu" class="side-nav-pages">
            <router-link class="anchor-link btn btn-white btn-sm" to="/"
              >HOME</router-link
            >
          </li>
          <li @click="handleCloseMenu" class="side-nav-pages">
            <router-link class="anchor-link btn btn-white btn-sm" to="/about"
              >ABOUT</router-link
            >
          </li>
          <li @click="handleCloseMenu" class="side-nav-pages">
            <router-link class="anchor-link btn btn-white btn-sm" to="/faqs"
              >FAQS</router-link
            >
          </li>
          <li @click="handleCloseMenu" class="side-nav-pages">
            <router-link class="anchor-link btn btn-white btn-sm" to="/leaderBoard"
              >LeaderBoard</router-link
            >
          </li>
        </ul>
      </div>

      <div class="sideNav-bottom">
        <img class="twitter" src="@/assets/images/twitter.png" />
        <img class="twitter" src="@/assets/images/discord.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
</style>
