<template>
    <div class="main">
        <div class="search-box">
            <input type="text" placeholder="type to search">
            <a class="search-btn" href="#">
                <i class="fas fa-search"></i>
            </a>
        </div>
        <div class="container">
            <div class="card">
                <div class="front">
                    <img src="/static/photo1.jpg" alt>
                </div>
                <div class="back">
                    <div class="back-content middle">
                        <h2>johbarca</h2>
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
            <div class="card">
                <div class="front">
                    <img src="/static/photo2.jpg" alt>
                </div>
                <div class="back">
                    <div class="back-content middle">
                        <h2>johbarca</h2>
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
            <div class="card">
                <div class="front">
                    <img src="/static/photo3.jpg" alt>
                </div>
                <div class="back">
                    <div class="back-content middle">
                        <h2>johbarca</h2>
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
            <div class="card">
                <div class="front">
                    <img src="/static/photo4.jpg" alt>
                </div>
                <div class="back">
                    <div class="back-content middle">
                        <h2>johbarca</h2>
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
            <div class="card">
                <div class="front">
                    <img src="/static/photo5.jpg" alt>
                </div>
                <div class="back">
                    <div class="back-content middle">
                        <h2>johbarca</h2>
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
    </div>
</template>
<script>
export default {
    name: "Main",
    props: {},
    data() {
        return {};
    }
};
</script>
<style scoped>
.main {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #30336b;
    overflow: hidden;
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
.container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    align-content: stretch;
}
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
