<template>
  <div id="treks-list">
    <span v-for="n in news" :key="n._id"  class="card overflow-hidden treksPlaceholder trek-details">
      <router-link
        :to="{path: '/details/' + n._id, query: {organizer: n.organizer}}"
        style="width: 20rem; height: 18rem;"
      >
        <div class="card-body">
          <p class="card-text">{{ n.title }}</p>
        </div>
        <img class="card-image" :src="n.imgUrl" alt="Card image cap" />
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "app-home-full",
  data: function() {
    return {};
  },

  props: {
    news: {
      type: Array,
      validator: arr => {
        return (
          arr.every(i => typeof i.title === "string") &&
          arr.every(i => typeof i.imgUrl === "string") &&
          arr.every(i => typeof i._id === "string")
        );
      },
      required: true
    }
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  cursor: pointer;
}
</style>
