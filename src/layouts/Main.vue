<template>
    <div class="main">
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/footer/footer.vue'
export default {
    components: {
        Footer,
    },
}
</script>

<style lang="scss">
.main {
    background-color: #000000;
    padding-bottom: 100px;
}
</style>
