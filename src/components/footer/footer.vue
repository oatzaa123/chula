<template>
    <div class="footer">
        <div class="vego">
            <img
                :src="
                    require('../../assets/images/home/footer/Group 90@2X.png')
                "
            />
        </div>
        <div class="content">
            <p style="color: white">
                พบกับประสบการณ์ใหม่ในการรับชม <br />
                Chula digital day & night ในรูปแบบ AR <br />
                และ VR ผ่านแอปพลิเคชันบนมือถือได้เร็วๆนี้
            </p>
        </div>
        <div class="button">
            <div style="position: relative">
                <img
                    :src="
                        require('../../assets/images/home/footer/Rectangle 46@2X.png')
                    "
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
    background-image: url('../../assets/images/home/footer/ve3X.png');
    min-height: 900px;
    position: relative;
}
.vego {
    position: absolute;
    top: 80%;
    right: 40%;
}
.content {
    position: absolute;
    top: 80%;
    right: 20%;
}
.button {
    position: absolute;
    bottom: 5%;
    right: 25%;
}
</style>
