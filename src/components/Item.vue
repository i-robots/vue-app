<template>
    <transition name="fade" appear>
        <li class="item">
            <h3>{{item.title}}</h3><hr>
            <img v-bind:src="item.imageUrl" alt="img"/> 
        </li>
    </transition>
</template>

<script>
export default{
    name: 'Item',
    props: {
        item: Object
    }
}
</script>

<style scoped>
.item{
    margin-right: 15px;
    margin-top: 10px;
    background-color: #283046;
    box-shadow: 0 4px 24px 0 rgba(34,41,47,.24);
    border: none;
    color: white;
    border-radius: 10px;
    width: 20%;
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

.fade-leave-active{
    transition: opacity .9s;
}

.fade-leave-to {
    opacity: 0;
}
</style>