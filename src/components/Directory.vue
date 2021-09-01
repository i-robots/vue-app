<template>
  <Header title="Shop section"/>
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
        }
  },
  methods:{
    del(id){
      removeItem(id);
    }
  },
  async created(){
    onValue(getRef(), (snapshot) => {
      this.items = Object.values(snapshot.val());
    });
  },
  beforeUpdate(){
    this.items = Object.values(this.items).reverse();
  },
}
</script>

<style scoped>
.lds-dual-ring {
  position: fixed;
  left: 45%;
  margin-top: 2em;
  display: inline-block;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 48px;
  height: 48px;
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
