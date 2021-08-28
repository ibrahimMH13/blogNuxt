<template>
    <div class="flex text-center justify-center align-middle">
    <client-only>
      <post-list :posts="loadedPosts"/>
    </client-only>
    </div>
</template>
<script>
  import postList from "./postList";
    export default {
      components:{
        postList
      },
        name: "index",
       layout:'mainTheme',
      computed:{
        loadedPosts(){
          return  this.$store.getters.loadedPosts;
        }
      }

    }
</script>

<style scoped>

</style>
