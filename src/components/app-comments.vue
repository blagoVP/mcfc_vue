<template>
  <form class="create-trek" @submit.prevent="submitHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Title</h1>
      <p class="infoType">Comments:</p>
      <template v-if="comments[0]">
        <div class="trek-description" v-for="(comment, i) in comments" :key="i">
          <span class="purple">{{comment.user}}:</span>
          <span>{{comment.comment}}</span>
        </div>
      </template>
      <template v-else>
        <p class="trek-description">There's no comments yet...</p>
      </template>
    </div>
    <p class="text-center mb-4 purple infoType">Fill up your comment:</p>
    <div class="form-label-group">
      <input
        v-model="comment"
        @blur="$v.comment.$touch"
        :class="{
            invalid: $v.comment.$error && $v.comment.$dirty, 
            valid: !$v.comment.$error && $v.comment.$dirty}"
        class="form-control"
        placeholder="Comment..."
        autofocus
      />
      <label for="comment">Comment</label>
      <template v-if="$v.comment.$error">
        <p class="error-message" v-if="!$v.comment.required">Please fill your comment</p>
      </template>
    </div>

    <button class="btn btn-lg btn-dark btn-block" :disabled="$v.$invalid">Post yout comment</button>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import collectionRequestMixin from "../axios-requests/collection-request-mixin";

export default {
  created() {
    this.loadSingleNews(this.id);
  },
  mixins: [validationMixin, collectionRequestMixin],
  data() {
    return {
      id: this.$route.params.id,
      newsDetails: {},
      user: localStorage.getItem("user"),
      comment: "",
      comments: []
    };
  },
  validations: {
    comment: {
      required
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        return;
      }
      const newComment = {
        user: `${localStorage.getItem("user")}`,
        comment: `${this.comment}`
      };
      this.newsDetails.comments.push(newComment);
      const data = this.newsDetails;
      this.putRequest(this.id, data);
    }
  }
};
</script>

<style>
</style>