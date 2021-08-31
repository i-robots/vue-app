<template>
  <Header title="Shop section" :length="length"/>
  <div class="lds-dual-ring" v-if="items.length==0"></div>
  <Items :items="items" @delete-item="del"/>
</template>

<script>
import Header from './Header'
import Items from './Items'
import {onValue} from "firebase/database";
import {getRef,removeItem} from "../firebase";

export default {
  name: 'Directory',
  components:{
    Header,
    Items
  },
  data() {
        return{
          items: [],
          length: 0
        }
  },
  methods:{
    del(id){
      this.items.forEach((item,index)=> {
        if (item.id === id) {
            removeItem(index);
            this.items = this.items.filter((item) => item.id !== id)
            return
        }
      })
    }
  },
  async created(){
    onValue(getRef(), (snapshot) => {
      this.items = snapshot.val();
      this.length = this.items.length
    });
  }
}
</script>

<style scoped>
.lds-dual-ring {
  position: fixed;
  top: 50%;
  left: 50%;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
