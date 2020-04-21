<template>
  <nav class="site-header sticky-top py-1">
    <div class="container d-flex flex-column flex-md-row justify-content-between">
      <button type="button" class="py-2 d-none d-md-inline-block" @click="navigateHome">Home</button>
      <router-link v-if="hasUser" to="/create" class="py-2 d-none d-md-inline-block">Publish</router-link>
      <router-link v-if="hasUser" to="#" class="py-2 d-none d-md-inline-block">Hello, {{hasUser}}</router-link>
      <router-link v-if="!hasUser" to="/login" class="py-2 d-none d-md-inline-block">Login</router-link>
      <router-link v-if="!hasUser" to="/register" class="py-2 d-none d-md-inline-block">Register</router-link>
      <button :disabled="!hasUser" type="button" @click="logoutHandler" class="py-2 d-none d-md-inline-block">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "app-navigation",
  data() {
    return {};
  },
   computed: {
    hasUser() {
      return this.$store.getters["users/user"];
    }
  },
  methods: {
    logoutHandler() {
      this.$store.commit("users/clearUserInfo");
      this.$emit("onAuth", false);
      this.$router.push("/unAuth");
    },
    navigateHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
</style>
