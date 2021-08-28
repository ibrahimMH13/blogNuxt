<template>
  <div class="w-1/3 mt-12 m-auto">
    <h3 class="mb-10 shadow text-red-900 text-3xl solid">Update New Post</h3>
    <Form :post="loadedPost" @submitted="onUpdated"/>
  </div>
</template>

<script>
  import Form from "@/components/admin/post/Form";
  import axios from "axios";
    export default {
        name: "index",
      layout: 'mainTheme',
      components:{
          Form
      },
      asyncData(context) {
        return axios.get(`https://nuxt-2c9ef-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
          .then(res=>{
            return {
              loadedPost: {...res.data,id:context.params.postId}
            }
          }).catch(e=>console.log(e))
      },
      mounted(){
        this.$nextTick(() => {
          this.$nuxt.$loading.start()
          setTimeout(() => this.$nuxt.$loading.finish(), 10000)
        })

      }
      ,methods:{
        onUpdated(data){
          this.$store.dispatch('editPost',data).then(()=>{
            this.$router.push('/admin')
          });

        }
      }
    }
</script>

<style scoped>

</style>
