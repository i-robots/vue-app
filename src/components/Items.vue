<template>
    <transition-group tag="ul" name="list">
        <item @delete-item="this.$emit('delete-item', item.id)" :item="item" :key="item.id" v-for="item in items"/>
    </transition-group>
</template>

<script>
import Item from './Item'
export default {
    name: 'Items',
    props: {
        items: Array
    },
    components: {
        Item
    },
    emits: ['delete-item']
}
</script>

<style scoped>
ul > li {
    display: inline-block;
}

ul{
    background: #151c2f;
    border-radius: 1em;
}

.list-enter-from{
    opacity: 0;
    transform: scale(0.6);
}
.list-enter-to{
    opacity: 1;
    transform: scale(1);
}
.list-enter-active{
    transition: all 0.6s ease;
}

.list-leave-from{
    opacity: 1;
    transform: scale(1);
}

.list-leave-to{
    opacity: 0;
    transform: scale(0.6);
}
.list-leave-active{
    transition:all 0.6s ease;
}
</style>

