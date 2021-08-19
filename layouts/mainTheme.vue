<template>
  <main>
    <TheHeader @sidenavToggle="showNav=!showNav"/>
    <TheSidenav :show="showNav" @close="showNav=false"/>
    <nuxt/>
  </main>
</template>

<script>
  import TheHeader from "../components/nav/TheHeader";
  import TheSidenav from "../components/nav/TheSidenav";

     export default {
      components:{
        TheSidenav,
        TheHeader,
       },
        name: "mainTheme",
      data(){
        return{
          showNav:false,
        }
      }
    }
</script>

<style>
html{
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}
  body{
    margin: 0;
  }
  #nav{
    @apply w-full;
    position: absolute;
    top: 0;
   }
</style>
