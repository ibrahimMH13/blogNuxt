<template>
    <section class="admin-page">
      <section class="new-post">
        <div   class="h-24 ml-16 relative">
          <button class="shadow-3xl z-30 font-extrabold bg-gray-200 text-yellow-600 fixed rounded-2xl border-4 w-44 h-20"
                @click="$router.push('/admin/new-post')">
            Create New
          </button>
        </div>
      </section>
      <section class="posts">
        <h1 class="text-3xl border-8 mt-6">Posts list</h1>
         <post-list />
      </section>
    </section>
</template>

<script>
    import PostList from "../posts/postList";
    export default {
        name: "admin-page-index",
      components: {PostList},
      layout: 'mainTheme',
    }
</script>

<style scoped>
  .admin-page{
    padding: 20px;
  }
  .posts h1{
    text-align: center;
  }
</style>
