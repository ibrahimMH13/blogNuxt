<template>
  <main>
    <section  class="intro">
      <h1 class="text-center text-2xl text-white">
        It is a long established fact that a reader will be distracted by the readable con
      </h1>
    </section>
    <post-list />
  </main>
</template>

<script>
  import postList from "./posts/postList";
  export default {
    components:{
      postList
    },
    layout: 'mainTheme',
  }
</script>
<style scoped>
  article:hover{
    @apply border-red-200 border-2;
  }
 .intro{
 @apply h-80;
 background-image: url('@/assets/images/anime.jpg');
 background-size:cover ;
 background-position: center;
 background-repeat: no-repeat;
   position: relative;
}
  .intro h1{
    position: absolute;
    width: 90%;
    top: 30%;
    left: 5%;
  }
</style>
