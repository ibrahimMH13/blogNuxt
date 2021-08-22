<template>
  <div class="w-1/3 mt-12 m-auto">
    <h3 class="mb-10 shadow text-red-900 text-3xl solid">Create New Post</h3>
    <section>
      <form @submit.prevent="save">
        <app-control-input v-model="editPost.name">
          Name
        </app-control-input>
        <app-control-input v-model="editPost.title">
          Title
        </app-control-input>
        <app-control-input v-model="editPost.img">
          Image
        </app-control-input>
        <app-control-input
          :controlType="'textarea'"
          v-model="editPost.content">
          Content
        </app-control-input>
        <app-button :btnStyle="'inverted'">Save</app-button>
        <app-button @click="cancel" :btnStyle="'cancel'">Cancel</app-button>
      </form>
    </section>
  </div>
</template>

<script>
  import AppButton from "@/components/UI/AppButton";
  import AppControlInput from "@/components/UI/AppControlInput";
  export default {
    name: "new-post-index",
    components:{
      AppButton,
      AppControlInput
    },
    data(){
      return{
        editPost:{
          name:'',
          title:'',
          img:'',
          content:'',

        }
      }
    },
    methods:{
      cancel(){
        this.$router.push('/admin');
      },
      save(){
        console.log(this.editPost)
      }
    },
    layout: 'mainTheme',
  }
</script>

<style scoped>

</style>
