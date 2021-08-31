<template>
    <header>
        <h1>{{ title }} </h1>
        <form>
            <div class="field">
                <label class="label"> Title </label>
                <input class="input" type="text" v-model="stitle" />
            </div>

            <div class="field">
                <label class="label"> Image URL </label>
                <input class="input" type="text" v-model="imgUrl" />
            </div>

            <div class="field">
                <label class="label"> Type </label>
                <select v-model="gender">
                    <option v-for="gender in ['Men', 'Women']" :value="gender" :key="gender">
                        {{gender}}
                    </option>
                </select>
            </div>
            <Button :text="'ADD'"  :color="'#2c3e50'" @click.prevent="fakeSubmit"/>
        </form>
    </header>
    <hr>
</template>

<script>
import Button from './Button'
import {addToStore} from "../firebase";

export default {
    name: 'Header',   
    props: {
        title: String,
        length: Number
    },
    data(){
        return{
            stitle: "",
            gender: "Men",
            imgUrl: ""
        }
    },
    components:{
        Button
    },
    methods: {
        async fakeSubmit() {
            const obj = {
                title : this.stitle,
                imageUrl: this.imgUrl,
                id: Math.floor(Math.random() * 1000),
                linkUrl: 'shop/' + this.gender,
            }
            addToStore(obj,this.length)
        },
    }
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #637e99;
}
h1{
    margin-left: 2em;
}
form{
    display:flex;
    align-items: center;
    justify-content: space-around;
}
.field{
    margin-right: 1em;
}

.field input{
    border-radius: .5em;
    border: none;
}
</style>
