<template>
    <div class="main">
        <div class="login-brand">
            <img src="/static/pingtaiyingyong.png" alt="logo" width="70px">
        </div>
        <form action class="box">
            <h1>Create account</h1>
            <input class="in" type="text" placeholder="name" v-model="name">
            <input class="in" type="password" placeholder="password" v-model="password">
            <input class="in" type="password" placeholder="confirm password" v-model="repassword">
            <input type="submit" @click="doLogin">
            <div class="text-foot">
                Already have an account?
                <router-link to="/">Login</router-link>
                <!-- <a href="" class="register-link">Register</a> -->
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            name: "",
            password: "",
            repassword: ""
        };
    },
    methods: {
        doLogin() {
            if (
                this.name != "" &&
                this.password != "" &&
                this.repassword == this.password
            ) {
                this.$message({
                    duration: 1000,
                    type: "success",
                    message: "注册成功！"
                });
                this.$router.push({ path: "/" });
            } else {
                this.$message({
                    duration: 1000,
                    type: "error",
                    message: "注册失败！"
                });
            }
        }
    }
};
</script>

<style scoped>
.main {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top, #48a4ef 0%, #376bda 100%);
}
.login-brand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -225px);
    overflow: hidden;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    border-radius: 50%;
    /* -webkit-box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
    box-shadow: 0 0 1px lightgray; */
    padding: 10px;
    background: #dff9fb;
    z-index: 1;
}

.box {
    width: 300px;
    height: 270px;
    padding: 60px 30px 40px 30px;
    /*定位方法*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: #2d3436;
    border-radius: 20px;
}
.box h1 {
    color: white;
    font-weight: 400;
}
.box .in {
    background: none;
    display: block;
    margin: 15px auto;
    text-align: center;
    border: 2px solid #3498db;
    border-radius: 24px;
    outline: none;
    padding: 12px 10px;
    width: 200px;
    color: white;
    transition: 0.25s;
}
.box .in:focus {
    border-color: #27ae60;
    width: 250px;
}
.box input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 15px auto;
    text-align: center;
    border: 2px solid #27ae60;
    border-radius: 24px;
    outline: none;
    padding: 14px 10px;
    width: 100px;
    height: 50px;
    color: white;
    transition: 0.25s;
    cursor: pointer;
}
.box input[type="submit"]:hover {
    background: #27ae60;
}
.box .text-foot {
    padding-bottom: 10px;
    line-height: 40px;
    text-align: center;
    color: white;
}
</style>
