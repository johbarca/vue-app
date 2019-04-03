<template>
    <div class="main">
        <div class="search-box">
            <input type="text" placeholder="type to search">
            <a class="search-btn" href="#">
                <i class="fas fa-search"></i>
            </a>
        </div>
        <div class="container">
            <Photo v-for="(img,index) in imgs" :src="img.src" :key="index"></Photo>
        </div>
    </div>
</template>
<script>
import Photo from "@/components/Photo";
export default {
    name: "Main",
    components: {
        Photo
    },
    props: {},
    data() {
        return {
            imgs: [
                { src: "/static/photo1.jpg" },
                { src: "/static/photo2.jpg" },
                { src: "/static/photo3.jpg" },
                { src: "/static/photo4.jpg" },
                { src: "/static/photo5.jpg" }
            ]
        };
    }
};
</script>
<style scoped>
.main {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #30336b;
    overflow-x: hidden;
    overflow-y: auto;
}
.search-box {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    background: #535c68;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
}
.search-box:hover > input[type="text"] {
    width: 200px;
    padding: 0 6px;
}
.search-box:hover > .search-btn {
    background: white;
}
.search-box input[type="text"] {
    width: 0;
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    line-height: 40px;
    transition: 0.4s;
}
.search-btn {
    color: #e67e22;
    float: right;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #535c68;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
}
.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    align-content: stretch;
}
</style>
