<template>
  <nuxt-link :to="generateLink" class="rounded-md border m-5 p-3 border-2 w-full ">
    <article >
      <div class="max-h-60 h-60"
           :style="{background:' url('+img+')  no-repeat center center fixed'}">
      </div>
      <div class="bg-gray-300 p-5">
        <h1 v-text="title"></h1>
        <p v-text="txt"></p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
    export default {
        name: "card",
        props:{
          id:{
            required:true,
            type:String,
          },
          isAdmin: {
            required:true,
            type:Boolean
          },
          title:{
            required:true,
            type:String,
           },
          txt:{
            required:true,
            type:String,
          },
          img:{
            required:true,
            type:String,
          }
        },
        computed:{
          generateLink(){
           return  this.isAdmin?`/admin/posts/${this.id}`:`/posts/${this.id}`;
          }
        }
    }
</script>

<style scoped>

</style>
