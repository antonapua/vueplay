<template>
  <li class="col-sm-6">
    <div class="heading">
      <h4>{{stock.name}}</h4>
      <span>Price ({{stock.price}})</span>
    </div>
    <div class="content">
      <input type="text" placeholder="Quantity" v-model.number="quantity"/>
      <button class="btn btn-success"
        @click="doBuy"
        :disabled="quantity <= 0 || !Number.isInteger(quantity)"
        >Buy</button>
    </div>
  </li>
</template>
<script>
  export default{
    props: ['stock'],
    data(){
      return{
        quantity: 0,
        fund: this.$store.state.funds
      }
    },
    methods: {
      doBuy(){

        const order ={
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }

        if( this.quantity < 1){
          console.log('Quantity should be more than 0');
          return;
        }

        let buyingPrice = order.quantity * order.stockPrice;
        let remainingFund = this.fund - buyingPrice;


        remainingFund = parseFloat(Math.round(remainingFund * 100) / 100).toFixed(2);
        if( remainingFund < 1){
            console.log('You have insufficient funds');
            return;
        }
        console.log(`
          You Bought ${this.quantity} of ${this.stock.name} stocks.
          And have ${remainingFund} in remaining funds.
          `);
          this.quantity = 0;
      }
    }
  }
</script>
<style scoped>
span{
  font-size: 14px;
}
h4{
  display: inline-block;
  text-transform: uppercase;
  font-size: 20px;
  span{
    font-size: 10px;
  }
}
.heading{
  background: rgb(78, 80, 83);
  border: 1px solid #010101;
  color: white;
  border-radius: 3px 3px 0 0;
  padding: 10px 20px;
}
.col-sm-6{
  margin: 0;
  margin-bottom: 30px;
}
input{
  padding: 5px 15px;
}
.content{
  border: 1px solid rgb(78, 80, 83);
  padding: 20px;
  border-radius: 0 0 3px 3px;
}
.content:after{
  clear: both;
  content: '';
  display: table;
}
.btn{
  float: right;
  min-width: 100px;
}
.row{
  margin-bottom: 0;
}
li:nth-last-of-type(-n+2) {
    margin-bottom: 0;
}
</style>
