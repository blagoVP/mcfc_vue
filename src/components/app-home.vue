<template>
  <div>
    <navigation></navigation>
    <button @click="selectedComponent = 'AppNotLoading'">Loading...</button>
    <button @click="selectedComponent = 'AppNotSucces'">Succes</button>
    <button @click="selectedComponent = 'AppRegister'">Register</button>
    <button @click="selectedComponent = 'AppLogin'">Login</button>
    <button @click="selectedComponent = ''">Clear!</button>
    <component :is="selectedComponent"></component>
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
        <img class="home-picture" src="assets/logo.png" />
      </div>
    </div>
    <app-home-full :newss="news" @onChange="news = $event"></app-home-full>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navigation from "./core/Navigation.vue";
import AppFooter from "./core/app-footer.vue";
import AppHomeFull from "./app-home-full";
import AppNotSucces from "./shared/app-not-succes.vue";
import AppNotLoading from "./shared/app-not-loading.vue";
import AppRegister from "./auth/app-register.vue";
import AppLogin from "./auth/app-login.vue"

export default {
  name: "app-home",
  components: {
    Navigation,
    AppFooter,
    AppHomeFull,
    AppNotSucces,
    AppNotLoading,
    AppRegister,
    AppLogin
  },
  data: function() {
    return {
      selectedComponent: "",
      news: [
        {
          title: "News1",
          img:
            "https://i2-prod.manchestereveningnews.co.uk/incoming/article17494558.ece/ALTERNATES/s615/0_GettyImages-1196630243.jpg"
        },
        {
          title: "News2",
          img:
            "https://resources.premierleague.com/premierleague/photo/2018/12/03/7fa44372-3348-499f-8f08-acaa2cbcfed6/Sane-Aguero-man-City.jpg"
        },
        {
          title: "News3",
          img:
            "https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2019/09/21152847/Man-City-celebration-Watford.jpg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
