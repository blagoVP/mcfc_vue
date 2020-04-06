<template>
     <!-- <button @click="selectedComponent = 'AppNotLoading'">Loading...</button>
    <button @click="selectedComponent = 'AppNotSucces'">Succes</button>
    <button @click="selectedComponent = 'AppRegister'">Register</button>
    <button @click="selectedComponent = 'AppLogin'">Login</button>
    <button @click="selectedComponent = 'AppCreate'">Create</button>
    <button @click="selectedComponent = ''">Clear!</button>
    <component :is="selectedComponent"></component> --> 
    <div class="home d-md-flex flex-md-equal my-md-3 pl-md-3">
      <div style=" padding-left: 7%; padding-top:3%;" class="col-md-7">
        <h2 class="featurette-heading">
          Here you will find the treks you've
          <span class="text-highlighted">
            always dreamed
            about!
          </span>
        </h2>
        <p class="lead">1. Join our family.</p>
        <p style="padding-left:5%" class="lead">2. Request the trek you've always wanted.</p>
        <p style="padding-left:10%" class="lead">3. Find people who like your idea.</p>
        <p class="lead">If you find enough supporters, we will organize everything for you!</p>
      </div>
      <div class="col-md-5">
        <!-- <img class="home-picture" src="../assets/01e18272c5721e6198efdfa19cc5f6e1.jpg" /> -->
      </div>
    </div>
</template>

<script>
export default {
  data(){
      return {

      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
