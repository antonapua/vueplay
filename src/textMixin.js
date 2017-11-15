export const textMixin ={
  data(){
    return{
      message: 'Bacon is best on mondays'
    }
  },
  computed:{
    reversedMessage(){
      return this.message.split('').reverse().join('');
    },
    countMessage(){
      let count = this.message.split('').length;
      return `${this.message} [${count}]`;
    }
  }
}
