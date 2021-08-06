<template>
    <img :src="require('./assets/images/CHULA @1X.png')" />
</template>

<script>
// import { ref } from 'vue'
export default {
    name: 'App',
    components: {},
    setup() {},
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
body {
    background-image: url('./assets/images/Group 101@3X.png');
}
</style>
