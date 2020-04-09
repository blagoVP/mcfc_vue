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
        :class="{invalid: $v.title.$error && $v.title.$dirty, valid: !$v.title.$error && $v.title.$dirty}"
        class="form-control"
        placeholder="Title"
        autofocus
      />
      <label for="inputTrekName">Title</label>
      <template v-if="$v.title.$error">
        <p class="error-message" v-if="!$v.title.required">Title is required</p>
        <p
          class="error-message"
          v-if="!($v.title.minLength && $v.title.maxLength)"
        >Title should be between 8 and 70 chars</p>
      </template>
    </div>

    <div class="form-label-group">
      <textarea
        v-model="content"
        @blur="$v.content.$touch"
        :class="{invalid: $v.content.$error && $v.content.$dirty, valid: !$v.content.$error && $v.content.$dirty}"
        class="form-control"
        placeholder="Content"
      ></textarea>
      <label for="inputTrekDescription">Content</label>
      <template v-if="$v.content.$error">
        <p class="error-message" v-if="!$v.content.required">Content is required</p>
        <p
          class="error-message"
          v-if="!($v.content.minLength && $v.content.maxLength)"
        >Content should be between 150 and 1500 chars</p>
      </template>
    </div>

    <div class="form-label-group">
      <input
        v-model="imgUrl"
        @blur="$v.imgUrl.$touch"
        :class="{invalid: $v.imgUrl.$error && $v.imgUrl.$dirty, valid: !$v.imgUrl.$error && $v.imgUrl.$dirty}"
        class="form-control"
        placeholder="Image url"
        autofocus
      />
      <label for="inputTrekImage">Image</label>
      <template v-if="$v.imgUrl.$error">
        <p class="error-message" v-if="!$v.imgUrl.required">Image url is required</p>
        <p class="error-message" v-if="!$v.imgUrl.url">Please add valid url</p>
      </template>
    </div>

    <button class="btn btn-lg btn-dark btn-block" :disabled="$v.$invalid">Publish</button>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, url } from "vuelidate/lib/validators";
import collectionRequestMixin from "../axios-requests/collection-request-mixin";

export default {
  mixins: [validationMixin, collectionRequestMixin],
  data() {
    return {
      title: "",
      content: "",
      imgUrl: "",
      comments: []
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(70)
    },
    content: {
      required,
      minLength: minLength(150),
      maxLength: maxLength(5500)
    },
    imgUrl: {
      required,
      url
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        return;
      }
      const data = {
        title: this.title,
        content: this.content,
        imgUrl: this.imgUrl,
        comments: this.comments,
        organizer: localStorage.getItem("user"),
        likes: 0
      };
      const url = "";
      this.postRequest(url, data);
    }
  }
};
</script>

<style scoped>
p.error-message {
  color: red;
  font-style: italic;
  text-align: center;
}
</style>