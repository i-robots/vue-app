<template>
    <ul>
        <item :item="item" :key="item.id" v-for="item in items"/>
    </ul>
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
    }
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
</style>

