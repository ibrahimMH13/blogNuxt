<template>
  <section class="w-1/2 mt-10 items-center justify-center  m-auto">
    <ClientOnly>
      <card v-for="post in posts"
            :key="post.id"
            :is-admin="isAdmin"
            :id="post.id"
            :title="post.title"
            :txt="post.content"
            :img="post.img"
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
      },
      props:{
          isAdmin:{
            type:Boolean,
            default:false,
          },
        posts:{
            type: Array,
            required:true
        }
      }
    }
</script>

<style scoped>

</style>
