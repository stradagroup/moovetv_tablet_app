<template>
  <div>
    <div
      class="container-fluid bg-black nav-bar-dark"
      :class="this.$route.meta.layout === 'vendor' ? 'fixed':''"
    >
      <nav class="navbar navbar-expand-lg px-0">
        <router-link to="/" class="navbar-brand">
          <img class="logo" src="../assets/images/moovetv-logo1.svg" alt="logo" />
        </router-link>
        <button
          class="navbar-toggler text-dark"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="fa fa-bars text-white"></span>
        </button>

        <div class="collapse navbar-collapse bg-menu" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto menu orange menu-color">
            <li class="nav-item">
              <router-link to="./" class="nav-link">
                <img src="../assets/images/home-icon.svg" class="nav-icons" /> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="./" class="nav-link">
                <img src="../assets/images/moovepay-icon.svg" class="nav-icons" /> MooveMart
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="./" class="nav-link">
                <img src="../assets/images/tv-icon.svg" class="nav-icons" /> Live TV
              </router-link>
            </li>
            <li class="nav-item" @click="login" v-if="!isLoggedIn">
              <router-link to="#" class="nav-link">
                <i class="fas fa-sign-in-alt"></i> Vendor Login
              </router-link>
            </li>
            <li
              class="nav-item"
              @click="logout"
              v-if="isLoggedIn && this.$route.meta.layout === 'vendor'"
            >
              <router-link to="./" class="nav-link">Logout</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link to="./dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <div class="nav-link" id>
                <div class="menu2">
                  <input type="text" name="text" placeholder="Search" class="enter-search" />
                  <button class="send-search">Search</button>
                </div>
                <!--<img src="../assets/images/search-icon.svg" class="nav-icons">-->
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      isLoggedIn: null
    };
  },
  methods: {
    login() {
      this.$Bus.$emit("login")
    },
    logout() {
      localStorage.removeItem("vendor-jwt");
      this.$router.push("/");
    }
  },

  mounted() {

    this.isLoggedIn = localStorage.getItem("vendor-jwt");
  
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
