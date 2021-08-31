<template>
  <Header title="Shop section" />
  <Items :items="items" />
</template>

<script>
import Header from './Header'
import Items from './Items'
import {onValue} from "firebase/database";
import {getRef} from "../firebase";

export default {
  name: 'Directory',
  components:{
    Header,
    Items
  },
  data() {
        return{
          items: []
        }
  },
  async created(){
    onValue(getRef(), (snapshot) => {
      this.items = snapshot.val();
    });
  }
}
</script>
