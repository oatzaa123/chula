<template>
    <img
        class="animation-img"
        :src="require('../assets/images/clouds/cloud_PNG29@2X.png')"
    />
</template>

<script>
// import { ref } from 'vue'
export default {
    name: 'Home',
    components: {},
    setup() {},
}
</script>

<style lang="scss" scoped>
.animation-img {
    opacity: 0.3;
    animation: cloud 10s infinite;
}

@keyframes cloud {
    0% {
        transform: translate(0px);
    }
    90% {
        transform: translate(400px);
    }
    100% {
        transform: translate(500px);
    }
}
</style>
