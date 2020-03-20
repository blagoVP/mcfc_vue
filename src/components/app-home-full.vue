<template>
  <div id="treks-list">
    <a
      v-for="(n,i) in newss"
      :key="i"
      class="card overflow-hidden treksPlaceholder trek-details"
      style="width: 20rem; height: 18rem;"
    >
      <div class="card-body">
        <p class="card-text">{{ n.title }}</p>
      </div>
      <input type="text" @change.stop.prevent="changeTitle($event, i)" />
      <img class="card-image" :src="n.img" alt="Card image cap" />
    </a>
  </div>
</template>

<script>
export default {
  name: "app-home-full",
  
  data: function() {
    return {};
  },

  props: {
    newss: {
      type: Array,
      validator: (arr)=>{
        return arr.every((i) => typeof i.title === "string") &&
        arr.every((i) => typeof i.img === "string");
      },
      required: true,
      default: function(){
        return [{
        title: "Default news",
        img: "https://s.hs-data.com/bilder/teamfotos/640x360/750.jpg"
      }]}
    }
  },

  methods: {
    changeTitle(e, i) {
      const newTitle = e.target.value;
      this.newss[i].title = newTitle;
      this.$emit("onChange", this.newss);
      e.target.value = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
 cursor: pointer; 
}
</style>
