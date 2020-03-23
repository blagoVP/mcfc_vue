<template>
  <form @submit="submitHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
    </div>

    <div class="form-label-group">
      <input
        v-model="username"
        @blur="$v.username.$touch"
        type="text"
        id="inputUsername"
        class="form-control"
        placeholder="Username"
        autofocus
      />
      <label for="inputUsername">Username</label>
      <template v-if="$v.username.$error">
          <div v-if="!$v.username.required">
              Username is required
          </div>
      </template>
    </div>

    <div class="form-label-group">
      <input
        v-model="password"
        @blur="$v.password.$touch"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
      />
      <label for="inputPassword">Password</label>
      <template v-if="$v.password.$error">
          <div v-if="!$v.password.required">
              Password is required
          </div>
      </template>
    </div>

    <button :disabled="$v.$invalid" class="btn btn-lg btn-dark btn-block">Sign In</button>

    <div class="text-center mb-4">
      <p class="alreadyUser">
        Don't have account? Then just
        <a href="#">Sign-Up</a>!
      </p>
    </div>

    <p class="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  validations: {
      username:{
          required
      },
      password:{
          required
      }
  },
  methods: {
      submitHandler() {
      //validiraneto se izvikva pri natiskaneto na butona:
      // this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v.username);
        return;
      }
      console.log("Form is submitted");
    }
  }
};
</script>

<style scoped>
</style>