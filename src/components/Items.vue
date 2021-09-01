<template>
    <transition-group tag="div" class="horizontal-scroll" ref="scroll" name="list">
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

.horizontal-scroll{
    position:fixed;
    max-height: 1200px;
    padding-left: 30px;
    margin-left: -120px;
    overflow-y: overlay;
	overflow-x: hidden;
    transform: rotate(-90deg);
    transform-origin: right top;
    background: #151c2f;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.horizontal-scroll::-webkit-scrollbar {
  display: none; /* Chrome */
}

.horizontal-scroll > div {
	width: 120px;
    height: 120px;
}

.list-enter-from{
    opacity: 0;
    transform: scale(0.6) rotate(80deg);
}
.list-enter-to{
    opacity: 1;
    transform: scale(1) rotate(90deg);
}
.list-enter-active{
    transition: all 0.6s ease;
}

.list-leave-from{
    opacity: 1;
    transform: scale(1) rotate(90deg);
}

.list-leave-to{
    opacity: 0;
    transform: scale(0.6) rotate(80deg);
}
.list-leave-active{
    transition:all 0.6s ease;
}
</style>

