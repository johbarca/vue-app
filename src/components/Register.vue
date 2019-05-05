<template>
    <div class="main">
        <div class="login-brand">
            <img src="/static/pingtaiyingyong.png" alt="logo" width="70px">
        </div>
        <el-form :model="params" :rules="rules" ref="ruleForm" class="box">
            <h1>Create account</h1>
            <el-form-item prop="name">
                <input class="in" type="text" placeholder="name" v-model="params.name">
            </el-form-item>
            <el-form-item prop="password">
                <input class="in" type="password" placeholder="password" v-model="params.password">
            </el-form-item>
            <el-form-item prop="repassword">
                <input
                    class="in"
                    type="password"
                    placeholder="confirm password"
                    v-model="params.repassword"
                >
            </el-form-item>
            <input type="submit" @click="submitForm">
            <div class="text-foot">
                Already have an account?
                <router-link to="/">Login</router-link>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.params.repassword !== "") {
                    this.$refs.ruleForm.validateField("repassword");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.params.password) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            params: {
                name: "",
                password: "",
                repassword: ""
            },
            rules: {
                name: [
                    { required: true, message: "请输入姓名", trigger: "blur" },
                    {
                        min: 2,
                        max: 20,
                        message: "长度在2到20个字符",
                        trigger: "blur"
                    }
                ],
                password: [{ validator: validatePass, trigger: "blur" }],
                repassword: [{ validator: validatePass2, trigger: "blur" }]
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.$http
                        .post("/register", this.params)
                        .then(res => {
                            this.$message({
                                duration: 1000,
                                type: "success",
                                message: "注册成功！"
                            });
                            this.$router.push({ path: "/" });
                        })
                        .catch(err => {
                            this.$message({
                                duration: 1000,
                                type: "error",
                                message: "注册失败！"
                            });
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
        /* doRegister() {
            if (
                this.params.name != "" &&
                this.params.password != "" &&
                this.params.repassword == this.params.password
            ) {
                this.$http.post("/register", this.params).then(res => {
                    this.$message({
                        duration: 1000,
                        type: "success",
                        message: "注册成功！"
                    });
                    this.$router.push({ path: "/" });
                });
            } else {
                this.$message({
                    duration: 1000,
                    type: "error",
                    message: "注册失败！"
                });
            }
        } */
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
    transform: translate(-50%, -260px);
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
    height: 340px;
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
.el-form-item {
    margin: 0;
}
</style>
