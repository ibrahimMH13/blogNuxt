<template>
    <div class="flex text-center justify-center align-middle">
      <post-list />
    </div>
</template>
<script>
  import postList from "./postList";
    export default {
      components:{
        postList
      },
        name: "index",
       layout:'mainTheme'
    }
</script>

<style scoped>

</style>
