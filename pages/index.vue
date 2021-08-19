<template>
  <main>
    <section  class="intro">
      <h1 class="text-center text-2xl text-white">
        It is a long established fact that a reader will be distracted by the readable con
      </h1>
    </section>
    <section class="w-1/2 mt-10 items-center justify-center  m-auto">
      <ClientOnly>
        <card :id="1"
              :title="'that a reader will be sasas distracted 11111'"
              :txt="'that a reader will be sasas distracted'"
              img="'https://i.ytimg.com/vi/ZjT7nLCiGvU/maxresdefault.jpg'"
        />
        <card :id="2"
              :title="'that a reader will be sasas distracted 222'"
              :txt="'that a reader will be sasas distracted'"
              img="'https://i.ytimg.com/vi/ZjT7nLCiGvU/maxresdefault.jpg'"
        />
        <card :id="3"
              :title="'that a reader will be sasas distracted 3333'"
              :txt="'that a reader will be sasas distracted'"
              img="'https://i.ytimg.com/vi/ZjT7nLCiGvU/maxresdefault.jpg'"
        />
      </ClientOnly>
    </section>
  </main>
</template>

<script>
  import card from "../components/posts/card";
  export default {
    components:{
      card
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
