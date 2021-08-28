<template>
  <main class=" my-8 m-auto w-3/4 h-screen" :style="{background:' url('+loadedPost.img+')  no-repeat center center fixed'}">
    <section class="h-80 pt-6">
      <h1 class="text-red-800 text-center font-bold text-4xl mt-6 m-2 p-1" v-text="loadedPost.title"></h1>
      <div class="mt-12">
        <p class="p text-center text-white"  v-text="loadedPost.content">

        </p>
      </div>
    </section>
    <section class="rounded-2xl shadow mt-40 bg-gray-300 p-3">
      <p v-text="loadedPost.name"></p>
    </section>
  </main>
</template>

<script>
  import axios from "axios";

  export default {
    name: "index",
    layout: 'mainTheme',
    asyncData(context) {
      return   axios.get(`https://nuxt-2c9ef-default-rtdb.firebaseio.com/posts/${context.params.id}.json`)
        .then(res=>{
          return {
            loadedPost:res.data
          }
        }).catch(e=>context.error(e))
    }
    // asyncData(context, callback) {
    //   setTimeout(() => {
    //     callback(null, {
    //       loadedPost: {
    //         id: 1,
    //         name: "Various versions have evolved over the years, sometimes by accident.",
    //         title: `Lorem Ipsum ${context.params.id}`,
    //         content: "It is a long established fact that a reader will be distracted by the readable\n" +
    //           "          content of a page when looking at its layout. The point of using Lorem Ipsum is\n" +
    //           "          that it has a more-or-less normal distribution of letters, as opposed to using\n",
    //         img: 'https://animedetro.com/wp-content/uploads/2021/02/24f88b00f6ad99e26cd91f87a383de4d-1024x576.jpg',
    //       }
    //     });
    //   }, 1000);
    // }
  }
</script>

<style scoped>

</style>
