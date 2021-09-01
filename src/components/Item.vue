<template>
    <div class="item">
        <div class="header">
            <h3>{{item.title}}</h3>
            <Button :text="'X'"  :color="'#9c3f3f'" @click="$emit('delete-item')"/>
        </div><hr>
        <img v-bind:src="item.imageUrl" alt="img"/> 
    </div>
</template>

<script>
import Button from './Button'
export default{
    name: 'Item',
    props: {
        item: Object
    },
    components:{
        Button
    }
}
</script>

<style scoped>
.item{
    margin-top: 10px;
    background-color: #283046;
    box-shadow: 0 4px 24px 0 rgba(34,41,47,.24);
    border: none;
    color: white;
    border-radius: 10px;
    transform: rotate(90deg);
}
.header{
    display:flex;
    justify-content: space-between;
}

img {
    max-width: 100%;
    max-height: 100%;
}

h3{
    margin: 0.5em;
    font-family: Montserrat,Helvetica,Arial,serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.45;
}

button{
    padding: 4px 10px;
}
</style>