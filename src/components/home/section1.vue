<template>
  <div class="home">
    <div class="section-1" :class="{ bgnight: isNight }">
      <div class="lang"><span>TH</span> | <span>EN</span></div>
      <div class="logo-block">
        <div class="left">
          <div class="logo">
            <div class="title">CHULA</div>
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
            <div class="n">&</div>
            <div
              class="night"
              :class="{ active: isNight }"
              @click="bgToggle(true)"
            >
              NIGHT
            </div>
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
export default {
  data() {
    return {
      isNight: false,
      Menu: [
        { name: "Menu", path: "/Home" },
        { name: "Gallery", path: "/Gallery" },
        { name: "WorkShop", path: "/WorkShop" },
        { name: "News", path: "/News" },
        { name: "About", path: "/About" },
        { name: "Contact", path: "/Contact" },
      ],
    };
  },
  methods: {
    bgToggle(boolean) {
      this.isNight = boolean;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/css/home/section1.scss";
</style>
