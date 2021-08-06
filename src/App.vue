<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: 'App',
    components: {},
    setup() {
        const router = useRouter()
        onMounted(() => {
            router.replace({ name: 'Home' })
        })
    },
}
</script>

<style lang="scss">
body {
    background-image: url('./assets/images/Group 101@3X.png');
}
</style>
