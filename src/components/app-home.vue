<template>
  <div>
    <template v-if="news[0]">
      <app-home-full :news="news"></app-home-full>
    </template>
    <template v-if="showEmptyPage">
       <app-home-empty></app-home-empty>
    </template>
  </div>
</template>

<script>
import AppHomeFull from "./app-home-full";
import AppHomeEmpty from "./app-home-empty.vue";
import axiosInstance from "../axios-collection-request";


export default {
  name: "app-home",
  components: {
    AppHomeFull,
    AppHomeEmpty
  },
  data: function() {
    return {
      news: [],
      isLoading: true,
      showEmptyPage: false
    };
  },
  methods: {
    loadNews() {
      axiosInstance
        .get()
        .then(res => {
          console.log(res.data);
          if (res.data.length == 0){
            this.showEmptyPage = true;
          }
          this.news = res.data;
          console.log(this.news);
        })
        .catch(err => {
          console.error(err);
        });
        this.isLoading = false;
    
    }
  },
  created() {
    this.loadNews();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
