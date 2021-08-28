<template>
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
        <img v-if="editPost.img" :src="editPost.img">
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
</template>

<script>
  import AppButton from "../../UI/AppButton";
  import AppControlInput from "../../UI/AppControlInput";
    export default {
        name: "Form",
        components:{
          AppControlInput,
          AppButton
        },
      props:{
          post:{
            Type:Object,
            required:false,
          }
      }
       , data(){
        return{
          editPost:this.post?{...this.post}:{
            name:'',
            title:'',
            img:'',
            content:'',
          }
        }
      },
      mounted(){
          console.log(this.post)
      },
      methods:{
        cancel(){
          this.$router.push('/admin');
        },
        save(){
            this.$emit('submitted',this.editPost);
        }
      }
    }
</script>

<style scoped>

</style>
