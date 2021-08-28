<template>
  <main>
    <section  class="intro">
      <h1 class="text-center text-2xl text-white">
        It is a long established fact that a reader will be distracted by the readable con
      </h1>
    </section>
    <client-only>
      <post-list v-if="loadedPosts" :posts="loadedPosts"/>
    </client-only>
  </main>
</template>

<script>
  import postList from "./posts/postList";
  export default {
    components:{
      postList
    },
    layout: 'mainTheme',
    //fetch and syncData the same with fetch can access direct to store commit
/*
//also we can use nuxtserverInit in store file this best way when fetch data will use
// at many time or diffrent component or page

    fetch(context) {
      if (context.store.state.loadedPosts.length >0) return null;//if loaded before
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            loadedPosts: [
              {
                id:1,
                title:'slajdflsa',
                content:"sadsadasfd",
                img:'https://animedetro.com/wp-content/uploads/2021/02/24f88b00f6ad99e26cd91f87a383de4d-1024x576.jpg',
              },
              {
                id:2,
                title:'slajdflsa',
                content:"sadsadasfd",
                img:'https://animedetro.com/wp-content/uploads/2021/02/24f88b00f6ad99e26cd91f87a383de4d-1024x576.jpg',
              },
              {
                id:3,
                title:'slajdflsa',
                content:"sadsadasfd",
                img:'https://animedetro.com/wp-content/uploads/2021/02/24f88b00f6ad99e26cd91f87a383de4d-1024x576.jpg',
              },
            ]
          });
        }, 100);
        // reject(new Error())
      })
        .then(data => {
        context.store.commit('setPosts',data.loadedPosts);
        })
        .catch(e => {
          context.error(e);
        });
    },
*/
    created(){
     // this.$store.dispatch('setPosts',this.loadedPosts);
    },
    computed:{
      loadedPosts(){
       return  this.$store.getters.loadedPosts;
      }
    }

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
