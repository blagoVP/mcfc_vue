<template>
  <div class="row single-trek-details text-center">
    <div class="col-md-12 text-center overflow-hidden">
      <img class="details-img" :src="newsDetails.imgUrl" />
      <div class="overflow-hidden my-3 p-3">
        <h2 class="display-5">{{newsDetails.title}}</h2>
        <p class="infoType">Read full story:</p>
        <p class="trek-description">{{newsDetails.content}}</p>
        <p class="infoType purple">
          Likes:
          <span class="purple">{{newsDetails.likes}}</span>
        </p>
        <p class="infoType">
          Organizer:
          <span>{{creator}}</span>
        </p>
      </div>
      <div class = "buttons-together">
        <button 
        class="btn btn-lg btn-dark"
        @click="commentNews"
        >
        Comment
        </button>
        <button
          :disabled="!isOrganizer()"
          :class="{noPointer: !isOrganizer()}"
          class="btn btn-lg btn-dark"
          @click="deleteRequest(id)"
        >Delete news
        </button>
        <button
          :disabled="isOrganizer()"
          :class="{noPointer: isOrganizer()}"
          class="btn btn-lg btn-dark "
          @click="likeNews"
        >Like
        </button>
      </div>
      <div>----------------------</div>
      <p class="infoType">Comments:</p>
      <template v-if="comments[0]">
        <div class="trek-description" v-for="(comment, i) in comments" :key="i">
          <span class="purple">{{comment.user}}: </span>
          <span>{{comment.comment}}</span>
        </div>
      </template>
      <template v-else>
        <p class="trek-description">There's no comments yet...</p>
      </template>
    </div>
  </div>
</template>

<script>
import collectionRequestMixin from "../../axios-requests/collection-request-mixin";

export default {
  created() {
    this.loadSingleNews(this.id);
  },
  mixins: [collectionRequestMixin],
  data() {
    return {
      id: this.$route.params.id,
      newsDetails: {},
      creator: this.$route.query.organizer,
      users: null,
      comments: []
    };
  },
  methods: {
    likeNews() {
      this.newsDetails.likes = Number(this.newsDetails.likes);
      this.newsDetails.likes++;
      const data = this.newsDetails;
      this.putRequest(this.id, data);
    },
    isOrganizer() {
      return localStorage.getItem("user") === this.creator;
    },
    commentNews() {
      this.$router.push(`/comment/${this.id}`);
    }
  }
};
</script>

<style scoped>
.noPointer {
  cursor: default;
}
</style>