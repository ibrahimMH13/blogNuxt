import Vuex from 'vuex'
import axios from "axios";

const createStore = ()=>{
  return new Vuex.Store({
    state:{
      loadedPosts:[]
    },
    mutations:{
      setPosts(state,posts){
        state.loadedPosts = posts;
      },
      editPost(state,post){
       const id =state.loadedPosts.findIndex(p=>p.id === post.id);
       state.loadedPosts[id] = post;
      },
      addPost(state,post){
        state.loadedPosts.push(post);
      }
    },
    actions:{
      nuxtServerInit(veuxContext,context){
/*
        if(!process.client){
          console.log(context.req)
        }
*/
      return   axios.get(process.env.baseUrl+'/posts.json').then(res=>{
          const dataArr = [];
          for (const key in res.data){
           dataArr.push({...res.data[key],id:key});
            veuxContext.commit('setPosts',dataArr);
          }
        }).catch(e=>context.error(e))
       /* return new Promise((resolve,reject) => {
          setTimeout(()=>{
            veuxContext.commit('setPosts',[
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
            ]);
            resolve();
          },1000);
        });*/
      },
      addPost(VueContext,post){
       return  axios.post('https://nuxt-2c9ef-default-rtdb.firebaseio.com/posts.json', post).then(res=>{
           VueContext.commit('addPost', {...post,id:res.data.name});
        }).catch(e=>console.log(e));
    },
      editPost(context, post) {
      return  axios.put(`https://nuxt-2c9ef-default-rtdb.firebaseio.com/posts/${post.id}.json`,post)
        .then(res=>{
        context.commit('editPost',post);
      });

      }
      /*
            setPosts(veuxContext,posts){
              veuxContext.commit('setPosts',posts);
            }
      */
    }
    ,
    getters:{
      loadedPosts(state){
        return state.loadedPosts;
      }
    },
  });
}

export default createStore
