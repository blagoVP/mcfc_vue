<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="fouronefour">
            <img class="no-found-picture" src="../assets/city-success.jpg" />
          </div>
          <div class="no-found-template">
            <h1 class="purple">There aren't any news, yet!</h1>
            <h2 class="purple">Have you seen something interesting lately?</h2>
            <div class="purple no-found-details">Be the first to publish!</div>
            <div class="actions">
              <router-link to="/create" class="btn btn-dark btn-lg">Create the first trek?</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-home-full :news="news"></app-home-full>
  </div>
</template>

<script>
import AppHomeFull from "./app-home-full";
import axiosInstance from "../axios-collection-request";

export default {
  name: "app-home",
  components: {
    AppHomeFull
    ;] >>###
  },
  data: function() {
    return {
      news: []
    };
  },
  methods: {
    loadNews() {
      axiosInstance
        .get()
        .then(res => {
          this.news = res.data;
          console.log(this.news);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.loadNews();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.purple {
  color: purple;
}
</style>
