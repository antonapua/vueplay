<template>
  <div>
    <ul class="row">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </ul>
  </div>
</template>
<script>
  import Stock from './Stock';
  export default{
    data(){
      return {
        brands: this.$store.state.brands
      }
    },
    components: {
      appStock : Stock
    },
    computed: {
      stocks(){
        return this.$store.getters.stocks;
      }
    }
  }
</script>
