<template>
  <div class="home">
    <div class="logo-block">
      <div class="left">
        <div class="main">CHULA</div>
        <div class="sub">DIGITAL ARTS PARK</div>
      </div>
      <div class="right"></div>
    </div>
    <!-- <img class="background" :src="require('../assets/images/CHULA @1X.png')" /> -->
    <div class="animation-cloud"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
  min-height: 500px;
  width: 100%;
  position: relative;
  display: inline-block;
}
.logo-block {
  width: 80%;
  margin: auto;
  .left {
    width: 50%;
    line-height: 1;
    text-align: right;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 10px #ffffff;
    .main {
      font-size: 5rem;
    }
    .sub {
      font-size: 1.5rem;
    }
  }
}

.animation-cloud {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.animation-cloud:before,
.animation-cloud:after {
  opacity: 0.3;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/clouds/cloud_PNG29@2X.png");
  background-size: 100%;
  animation: cloud 60s infinite linear;
}

.animation-cloud:before {
  right: 100%;
}

@keyframes cloud {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
