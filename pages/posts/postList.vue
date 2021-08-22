<template>
  <section class="w-1/2 mt-10 items-center justify-center  m-auto">
    <ClientOnly>
      <card :id="1"
            :title="'that a reader will be sasas distracted 11111'"
            :txt="'that a reader will be sasas distracted'"
            :img="'https://i.ytimg.com/vi/ZjT7nLCiGvU/maxresdefault.jpg'"
      />
      <card :id="2"
            :title="'that a reader will be sasas distracted 222'"
            :txt="'that a reader will be sasas distracted'"
            :img="'https://i.ytimg.com/vi/ZjT7nLCiGvU/maxresdefault.jpg'"
      />
      <card :id="3"
            :title="'that a reader will be sasas distracted 3333'"
            :txt="'that a reader will be sasas distracted'"
            :img="'https://i.ytimg.com/vi/ZjT7nLCiGvU/maxresdefault.jpg'"
      />
    </ClientOnly>
  </section>

</template>

<script>
  import card from "../../components/posts/card";
    export default {
        name: "postList",
      components:{
          card
      }
    }
</script>

<style scoped>

</style>
