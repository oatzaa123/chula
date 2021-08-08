<template>
    <div class="container">
        <div class="title">
            <div class="group-title">
                <sup class="sup"><p>Gallery</p></sup>
                <h1 class="customText">DIGITAL ART</h1>
                <sub class="sub"><h5>SCULTURE</h5></sub>
            </div>
        </div>
        <div class="content">
            <div class="map">
                <img :src="require('../assets/images/gallery/Group 294.svg')" />
            </div>
            <div class="content-view">
                <div
                    v-for="(item, index) in ['1', '2', '3', '4', '5']"
                    :key="index"
                >
                    <img
                        :src="require('../assets/images/gallery/Image 49.svg')"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
    padding-top: var(--bs-gutter-x, 1.75rem);
    .title {
        font: size 25px;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
        .group-title {
            width: fit-content;
            display: inline-block;
            .customText {
                letter-spacing: 0px;
                text-shadow: 1px 1px 1px white, 0 0 5px white, 0 0 5px white;
            }
            .sup {
                text-align: left;
            }
            .sub {
                text-align: right;
                color: #b61bff;
                text-shadow: 1px 1px 1px #b61bff, 0 0 5px #b61bff,
                    0 0 5px #b61bff;
            }
        }
    }
    .content {
        display: flex;
        justify-content: space-around;
        .content-view {
            overflow-y: auto;
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none;
            max-height: 75vh;
        }
        .content-view::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>
