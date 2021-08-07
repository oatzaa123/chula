<template>
    <div class="right">
        <router-link
            :to="{ path: item.path }"
            v-for="item in Menu"
            :key="item.key"
            class="menu-link"
        >
            <div>{{ item.name }}</div>
        </router-link>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const Menu = ref([
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/Gallery' },
            { name: 'WorkShop', path: '/WorkShop' },
            { name: 'News', path: '/News' },
            { name: 'About', path: '/About' },
            { name: 'Contact', path: '/Contact' },
        ])

        return { Menu }
    },
}
</script>

<style lang="scss" scoped>
.right {
    width: 35%;
    line-height: 1.75;
    font-size: 1rem;
    opacity: 0;
    transition: opacity 1s;
    &.show {
        opacity: 1;
    }
    .menu-link {
        color: #707070;
        text-decoration: unset;
        &.router-link-active {
            color: #ffffff;
        }
    }
}
</style>
