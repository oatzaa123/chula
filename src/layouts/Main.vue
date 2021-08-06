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
// .main {
//     background-image: url('../assets/images/Group 101@3X.png');
// }
</style>
