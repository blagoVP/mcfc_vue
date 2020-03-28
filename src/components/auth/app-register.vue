<template>
  <div>
    <form @submit.prevent="submitHandler">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <p>Join our family and make a wish!</p>
      </div>

      <div class="form-label-group">
        <input
          v-model="username"
          @blur="$v.username.$touch"
          id="inputUsername"
          class="form-control"
          placeholder="Username"
          autofocus
        />
        <label for="inputUsername">Username</label>
        <template v-if="$v.username.$error">
          <p v-if="!$v.username.required">Username is required</p>
          <p v-if="!$v.username.minLength">Username should be at least 5 chars</p>
          <!-- moje s v-else-if da se pokazwa samo edna, ako sa pove4e validacii -->
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
          <p v-if="!$v.password.required">Password is required</p>
          <p v-if="!$v.password.minLength">Password should be at least 8 symbols</p>
        </template>
      </div>

      <div class="form-label-group">
        <input
          v-model="rePassword"
          @blur="$v.rePassword.$touch"
          type="password"
          id="inputRePassword"
          class="form-control"
          placeholder="Re-Password"
        />
        <label for="inputRePassword">Re-Password</label>
         <template v-if="$v.rePassword.$error">
          <p v-if="!$v.rePassword.sameAs">Password don't match</p>
        </template>
      </div>

      <button 
      :disabled="$v.$invalid"
      class="btn btn-lg btn-dark btn-block">Sign Up</button>

      <div class="text-center mb-4">
        <p class="alreadyUser">
          Already have account? Then just
          <a href="#">Sign-In</a>!
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: "",
      rePassword: ""
    };
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
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  }
};
</script>

<style scoped>
</style>