<template>
    <div class="home">
        <div class="section-1">
            <div class="lang"><span>TH</span> | <span>EN</span></div>
            <div class="logo-block">
                <div class="left">
                    <div class="logo">
                        <div class="main">CHULA</div>
                        <div class="sub">DIGITAL ARTS PARK</div>
                    </div>
                    <div class="toggle">
                        <div class="day active">DAY</div>
                        <div class="night">NIGHT</div>
                    </div>
                </div>
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
            </div>
            <div class="animation-cloud"></div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const Menu = ref([
            { name: 'Menu', path: '/' },
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
.home {
    .section-1 {
        background-image: url('../assets/images/Group 101@3X.png');
        min-height: 500px;
        width: 100%;
        position: relative;
        display: inline-block;
        .logo-block {
            width: 80%;
            margin: auto;
            display: flex;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            .left {
                width: 65%;
                line-height: 1;
                text-align: right;
                font-weight: bold;
                color: #ffffff;
                text-shadow: 0px 0px 10px #ffffff;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: stretch;
                margin-right: 20px;
                .logo {
                    .main {
                        font-size: 5rem;
                    }
                    .sub {
                        font-size: 1.5rem;
                    }
                    margin-right: 15px;
                }
                .toggle {
                    line-height: 1.5;
                    font-size: 1.5rem;
                    text-align: left;
                    .day {
                        text-decoration: underline;
                    }
                    .night {
                        $color: #e17cff;
                        color: $color;
                        text-decoration-color: $color;
                        text-decoration: underline;
                    }
                    .day,
                    .night {
                        cursor: pointer;
                        &.active {
                            font-size: 3rem;
                        }
                    }
                }
            }
            .right {
                width: 35%;
                line-height: 1.75;
                font-size: 0.75rem;
                .menu-link {
                    color: #707070;
                    text-decoration: unset;
                    &.router-link-active {
                        color: #ffffff;
                    }
                }
            }
        }

        .lang {
            margin: 0 5px;
            text-align: right;
            color: #ffffff;
            cursor: pointer;
        }

        .lang {
            margin: 0 5px;
            text-align: right;
            color: #ffffff;
            cursor: pointer;
        }

        .animation-cloud {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            &::before {
                right: 100%;
            }
            &::before,
            &::after {
                opacity: 0.3;
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: url('../assets/images/clouds/cloud_PNG29@2X.png');
                background-size: 100%;
                animation: cloud 60s infinite linear;
            }
        }

        @keyframes cloud {
            from {
                transform: translateX(0%);
            }
            to {
                transform: translateX(100%);
            }
        }
    }
}
</style>
