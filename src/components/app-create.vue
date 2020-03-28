<template>
  <form class="create-trek" @submit.prevent="submitHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Publish news for our favourite team!</h1>
      <p>Fill up the following information!</p>
    </div>

    <div class="form-label-group">
      <input
        v-model="title"
        @blur="$v.title.$touch"
        class="form-control"
        placeholder="Title"
        autofocus
      />
      <label for="inputTrekName">Title</label>
      <template v-if="$v.title.$error">
        <p v-if="!$v.title.required">Title is required</p>
        <p v-if="!$v.title.minLength">Title should be at least 8 chars</p>
      </template>
    </div>

    <!-- <div class="form-label-group">
      <input type="text" name="dateTime" class="form-control" placeholder="Date" required />
      <label for="inputTrekDate">Date</label>
    </div>-->

    <div class="form-label-group">
      <textarea
        v-model="content"
        @blur="$v.content.$touch"
        class="form-control"
        placeholder="Content"
      ></textarea>
      <label for="inputTrekDescription">Content</label>
      <template v-if="$v.content.$error">
        <p v-if="!$v.content.required">Content is required</p>
        <p v-if="!($v.content.minLength && $v.content.maxLength)">Content should be between 150 and 1500 chars</p>
      </template>
    </div>

    <div class="form-label-group">
      <input
        v-model="imgUrl"
        @blur="$v.imgUrl.$touch"
        class="form-control"
        placeholder="Image url"
        autofocus
      />
      <label for="inputTrekImage">Image</label>
      <template v-if="$v.imgUrl.$error">
        <p v-if="!$v.imgUrl.required">Image url is required</p>
        <p v-if="!$v.imgUrl.url">Please add valid url</p>
      </template>
    </div>

    <button class="btn btn-lg btn-dark btn-block" :disabled="$v.$invalid">Publish</button>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, url } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      title: "",
      content: "",
      imgUrl: ""
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(8)
    },
    content: {
      required,
      minLength: minLength(150),
      maxLength: maxLength(1500)
    },
    imgUrl: {
      required,
      url
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

<style>
</style>