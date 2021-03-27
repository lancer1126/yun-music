<template>
  <div id="app">
    <navbar ref="navBar" />
    <main v-show="!this.$store.state.showLyrics">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      isElectron: process.env.IS_ELECTRON,
    };
  },
};
</script>
