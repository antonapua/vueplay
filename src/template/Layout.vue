<template>
  <div>
    <app-header></app-header>
    <main>
      <article>
        <router-view></router-view>
      </article>
    </main>
  </div>
</template>
<style scoped>
  main{
    border: 1px solid #eee;
    box-shadow: 0 0 1px 0 #010101;
    padding: 40px 20px;
  }
</style>
<script>
  import Header from './Header';
  export default {
    components: {
      appHeader: Header
    }
  }
</script>
