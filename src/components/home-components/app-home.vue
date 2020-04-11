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
import collectionRequestMixin from "../../axios-requests/collection-request-mixin";

export default {
  name: "app-home",
  components: {
    AppHomeFull,
    AppHomeEmpty
  },
    created() {
    this.getAllRequest();
  },
  mixins: [collectionRequestMixin],
  data: function() {
    return {
      news: [],
      showEmptyPage: false
    };
  },
};
</script>

<style scoped>

</style>
