<template>
    <div class="footer">
        <div class="footer-body">
            <div
                style="
                    display: flex;
                    justify-content: center;
                    padding-bottom: 25px;
                "
            >
                <div class="vego">
                    <img
                        :src="
                            require('../../assets/images/home/footer/Group 90@2X.png')
                        "
                    />
                </div>
                <div class="footer-content">
                    <div class="content">
                        <p style="color: white">
                            พบกับประสบการณ์ใหม่ในการรับชม <br />
                            Chula digital day & night ในรูปแบบ AR <br />
                            และ VR ผ่านแอปพลิเคชันบนมือถือได้เร็วๆนี้
                        </p>
                    </div>
                    <div class="button">
                        <div style="position: relative">
                            <button
                                type="button"
                                class="btn btn-outline-primary customButton"
                            >
                                <b>Let's Go</b>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact">
                <p style="color: white">
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; GridWhiz
                    (Thailand) Co. Ltd. (Headquarters)
                </p>
                <div
                    style="
                        display: flex;
                        justify-content: space-around;
                        opacity: 0.5;
                    "
                >
                    <div class="contact-content">
                        <p>184/185 Forum Tower 28th Fl. Ratchadapisek Rd.</p>
                        <p>Huai Khwang, Bangkok 10310</p>
                    </div>
                    <div class="contact-content">
                        <!-- <br /><br /><br /> -->
                        <p>Tel: +66 2061 9519 Fax: +66 2061 9519</p>
                        <p>Hot-line Support Tel: +66 8 3777 8822</p>
                    </div>
                    <div class="contact-icon">
                        <div v-for="(item, index) in icon" :key="index">
                            <img class="contact-icon" :src="item.path" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const icon = ref([
            {
                path: require('../../assets/images/home/footer/Group 118@2X.png'),
            },
            {
                path: require('../../assets/images/home/footer/Group 117@2X.png'),
            },
            {
                path: require('../../assets/images/home/footer/Group 122@2X.png'),
            },
        ])

        return { icon }
    },
}
</script>

<style lang="scss" scoped>
.footer {
    background: linear-gradient(
            to bottom,
            rgba(3, 0, 36, 0) 28%,
            rgba(7, 4, 39, 0.96) 80%,
            rgb(7, 4, 39)
        ),
        url('../../assets/images/home/footer/ve.svg') no-repeat left top;
    // background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    min-height: 135vh;
    position: relative;
    .footer-body {
        position: absolute;
        bottom: 0;
        width: 100%;
        .footer-content {
            margin-left: 25px;
        }
        .contact {
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            margin: 0px 50px;
            padding-top: 20px;
            line-height: 0.5rem;
            margin-bottom: 100px;
            color: rgba(255, 255, 255, 1);
            .contact-icon {
                display: flex;
                margin: 0px 5px;
            }
        }
    }
}
.customButton {
    border-radius: 20px;
    width: 200px;
}
hr {
    color: #fff;
}
</style>
