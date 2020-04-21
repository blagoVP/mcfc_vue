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
import axiosInstance from "../../axios-requests/axios-collection-request";

export default {
  name: "app-home",
  components: {
    AppHomeFull,
    AppHomeEmpty
  },
  beforeRouteEnter(to, from, next) {
  axiosInstance
        .get()
        .then(res => {
          if (res.data.length == 0){
            this.showEmptyPage = true;
          }
          next((vm)=>{
            vm.setData(null, res.data)
          });
        });
  },
  created() {
  },
  data: function() {
    return {
      news: [],
      showEmptyPage: false
    };
  },
  methods:{
     setData(err, data){
      if (err){
        this.err = err;
        console.error(err);
      } else{
        this.news = data;
      }
    }
  }
};
</script>

<style scoped>
</style>
