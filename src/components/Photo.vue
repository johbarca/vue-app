<template>
    <div>
        <div class="card">
            <div class="front">
                <img :src="this.img.path" alt="图片加载失败">
            </div>
            <div class="back">
                <div class="back-content middle">
                    <h2>{{this.$store.state.name}}</h2>
                    <a :href="this.img.path" :download="this.img.path">{{this.img.name}}</a>
                    <!-- <a :href="this.img.path" download="">{{this.img.name}}</a> -->
                    <!-- <el-button @click="download">下载</el-button> -->
                    <span></span>
                    <div class="share">
                        <a href="#">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-weixin"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-weibo"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Photo",
    props: {
        img: {}
    },
    data() {
        return {};
    },
    methods: {
        download() {
            this.$http
                .post("/download", { filename: this.img.name })
                .then(result => {
                    console.log(result);
                });
        }
    },
    beforeMount() {
        // console.log(this.src);
    }
};
</script>

<style scoped>
.middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.card {
    /* margin: 50px; */
    cursor: pointer;
    width: 300px;
    height: 200px;
    margin: 25px;
}
.front,
.back {
    width: 300px;
    height: 200px;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform 0.8s linear;
}
.front img {
    height: 100%;
}
.front {
    transform: perspective(600px) rotateY(0deg);
}
.back {
    background: #ecf0f1;
    transform: perspective(600px) rotateY(180deg);
}
.back-content {
    color: #2980b9;
    text-align: center;
    width: 100%;
}
.share {
    margin: 20px 0;
}
.share a {
    display: inline-flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #2980b9;
    font-size: 20px;
    border-radius: 50%;
    transition: 0.4s;
}
.share a:hover {
    background: #2980b9;
    color: white;
}
.card:hover > .front {
    transform: perspective(600px) rotateY(-180deg);
}
.card:hover > .back {
    transform: perspective(600px) rotateY(0deg);
}
</style>
