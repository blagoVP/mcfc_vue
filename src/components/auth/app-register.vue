<template>
  <div>
    <form @submit.prevent="submitHandler">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <p>Join our family and make a wish!</p>
      </div>

      <div class="form-label-group">
        <input
          v-model.lazy.trim="username"
          @blur="$v.username.$touch"
          :class="{invalid: $v.username.$error && $v.username.$dirty, valid: !$v.username.$error && $v.username.$dirty}"
          id="inputUsername"
          class="form-control"
          placeholder="Username"
          autofocus
        />
        <label for="inputUsername">Username</label>
        <template v-if="$v.username.$error">
          <p class="error-message" v-if="!$v.username.required">Username is required</p>
          <p class="error-message" v-if="!$v.username.minLength">Username should be at least 5 chars</p>
          <!-- moje s v-else-if da se pokazwa samo edna, ako sa pove4e validacii -->
        </template>
      </div>

      <div class="form-label-group">
        <input
          v-model.lazy.trim="password"
          @blur="$v.password.$touch"
          :class="{invalid: $v.password.$error && $v.password.$dirty, valid: !$v.password.$error  && $v.password.$dirty}"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
        />
        <label for="inputPassword">Password</label>
        <template v-if="$v.password.$error">
          <p class="error-message" v-if="!$v.password.required">Password is required</p>
          <p
            class="error-message"
            v-if="!$v.password.minLength"
          >Password should be at least 8 symbols</p>
        </template>
      </div>

      <div class="form-label-group">
        <input
          v-model.trim="rePassword"
          @blur="$v.rePassword.$touch"
          :class="{invalid: $v.rePassword.$error && $v.rePassword.$dirty, valid: !$v.rePassword.$error && $v.rePassword.$dirty}"
          type="password"
          id="inputRePassword"
          class="form-control"
          placeholder="Re-Password"
        />
        <label for="inputRePassword">Re-Password</label>
        <template v-if="$v.rePassword.$error">
          <p class="error-message" v-if="!$v.rePassword.sameAs">Password don't match</p>
        </template>
      </div>

      <button :disabled="$v.$invalid" class="btn btn-lg btn-dark btn-block">Sign Up</button>

      <div class="text-center mb-4">
        <p class="alreadyUser">
          Already have account? Then just
          <router-link to="/login">Sign-In</router-link>!
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
      rePassword: ""
    };
  },
  computed: {
    username: {
      get() {
        return this.$store.getters["users/inputUsername"];
      },
      set(value) {
        this.$store.commit("users/updateInputUsername", value);
      }
    },
    password: {
      get() {
        return this.$store.getters["users/inputPassword"];
      },
      set(value) {
        this.$store.commit("users/updateInputPassword", value);
      }
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        return;
      }
      const url = "/";
      this.$store.dispatch("users/postRequest", url);
      this.$emit("onAuth", this.$store.getters["users/user"]);
      this.$router.push("/home");
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
  },
  beforeDestroy() {
    this.$store.commit("users/updateInputPassword", null);
    this.$store.commit("users/updateInputUsername", null);
  }
};
</script>

<style scoped>
</style>