<template>
    <header>
        <h1>{{ title }} </h1>
        <Button :text="'Home'"  :color="'#2c3e50'" />
    </header>
    <hr>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',   
    props: {
        title: String,
    },
    components:{
        Button
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
</style>
