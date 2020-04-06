<template>
  <form @submit.prevent="submitHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
    </div>

    <div class="form-label-group">
      <input
        v-model="username"
        @blur="$v.username.$touch"
        :class="{invalid: $v.username.$error && $v.username.$dirty, valid: !$v.username.$error && $v.username.$dirty}"
        type="text"
        id="inputUsername"
        class="form-control"
        placeholder="Username"
        autofocus
      />
      <label for="inputUsername">Username</label>
      <template v-if="$v.username.$error">
        <p class="error-message" v-if="!$v.username.required">Username is required</p>
      </template>
    </div>

    <div class="form-label-group">
      <input
        v-model="password"
        @blur="$v.password.$touch"
        :class="{invalid: $v.password.$error && $v.password.$dirty, valid: !$v.password.$error && $v.password.$dirty}"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
      />
      <label for="inputPassword">Password</label>
      <template v-if="$v.password.$error">
        <p class="error-message" v-if="!$v.password.required">Password is required</p>
      </template>
    </div>

    <button :disabled="$v.$invalid" class="btn btn-lg btn-dark btn-block">Sign In</button>

    <div class="text-center mb-4">
      <p class="alreadyUser">
        Don't have account? Then just
        <router-link to="/register">Sign-Up</router-link>!
      </p>
    </div>

    <p class="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import axiosInstance from "../../axios-request.js";

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        return;
      }
      const data = { username: this.username, password: this.password };
      axiosInstance
        .post("/login", data)
        .then(res => {
          const user = res.data.username;
          const token = res.data._kmd.authtoken;

          localStorage.setItem("token", token);
          localStorage.setItem("user", user);
          this.$emit("onAuth", localStorage.getItem("user"));
          console.log(res);
          this.$router.push("/home");
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
</style>