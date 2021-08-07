<template>
  <div class="home">
    <div class="section-1" :class="{ bgnight: isNight }">
      <div class="lang"><span>TH</span> | <span>EN</span></div>
      <div class="logo-block">
        <div class="left">
          <div class="logo">
            <div class="main">CHULA</div>
            <div class="sub">DIGITAL ARTS PARK</div>
          </div>
          <div class="toggle" :class="{ day: !isNight, night: isNight }">
            <div
              class="day"
              :class="{ active: !isNight }"
              @click="bgToggle(false)"
            >
              DAY
            </div>
            <div
              class="night"
              :class="{ active: isNight }"
              @click="bgToggle(true)"
            >
              NIGHT
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const Menu = ref([
            { name: 'Menu', path: '/', active: true },
            { name: 'Gallery', path: '/Gallery' },
            { name: 'WorkShop', path: '/WorkShop' },
            { name: 'News', path: '/News' },
            { name: 'About', path: '/About' },
            { name: 'Contact', path: '/Contact' },
        ])

        const bgToggle = (boolean) => {
      this.isNight = boolean;
    },

        return { Menu, bgToggle }
    },
};
</script>

<style lang="scss">
@import "../assets/css/home/section1.scss";
</style>
