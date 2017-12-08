<template>
  <div>
    <nav class="nav">
      <router-link active-class="active" exact class="nav-link" to="/" tag="li"><a>Home</a></router-link>
      <router-link active-class="active"  class="nav-link" to="/portfolio" tag="li"><a>Portfolio</a></router-link>
      <router-link active-class="active"  class="nav-link" to="/stocks" tag="li"><a>Stocks</a></router-link>
      <li class="nav-link">
        <a>End Day</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Save & Load</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Save</a>
          <a class="dropdown-item" href="#">Load</a>
        </div>
      </li>
      <li class="nav-link">
        Funds: ${{ funds }}
      </li>
    </nav>

  </div>
</template>
<script>
  export default{
    data(){
      return {
        funds: this.$store.state.funds
      }
    }
  }
</script>
<style scoped>
  div{
    margin: 30px 0;
    border: 1px solid #eee;
    border-radius: 3px;
    background: rgb(78, 80, 83);
  }
  .dropdown-menu{
    margin-top: 0;
  }
  li{
    color: white;
  }
  a{
    color: white;
    transition: 0.2s all ease;
    text-decoration: none;
  }
  a.active{
    color: rgb(252, 176, 74);
  }
  a:hover{
    color: rgb(252, 176, 74);
  }
</style>
