<template>
  <div class="w-1/3 mt-12 m-auto">
    <h3 class="mb-10 shadow text-red-900 text-3xl solid">Create New Post</h3>
   <Form @submitted="onSubmitted"/>
  </div>
</template>

<script>
import Form from "../../../components/admin/post/Form";
import axios from 'axios';
  export default {
    name: "new-post-index",
    components:{
      Form
    },
    methods:{
      onSubmitted(data){
        this.$store.dispatch('addPost',data).then(()=>{
          this.$router.push('/admin');
        });
      }
/*
      axios.post('https://nuxt-2c9ef-default-rtdb.firebaseio.com/posts.json',data).then(res=>{
        this.$router.push('/admin')
      }).catch(e=>console.log(e));
      }
*/
    },
    layout: 'mainTheme',
  }
</script>

<style scoped>

</style>
