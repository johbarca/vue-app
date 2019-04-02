<template>
    <div class="hello">
		<div class="login-brand">
			<img src="/static/pingtaiyingyong.png" alt="logo" width="70px">
		</div>
        <form action class="box">
            <h1>LOGIN</h1>
            <input type="text" placeholder="name" v-model="name">
            <input type="password" placeholder="password" v-model="password">
            <input type="submit" @click="doLogin"> 
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
			name:"barca",
			password:"123"
        };
	},
	methods: {
		doLogin(){
			if(this.name=="barca"&&this.password=="123"){
				this.$router.push({ path: "/main" });
			}else{
				this.$message({
					duration:1000,
					type:"error",
					message:"账户或密码错误！"
				})
			}
			
		}
	}
};
</script>

<style scoped>
.hello{
	position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top, #48a4ef 0%, #376bda 100%);
}
.login-brand {
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-205px);
    overflow: hidden;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    border-radius: 50%;
    /* -webkit-box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
    box-shadow: 0 0 1px lightgray; */
    padding: 10px;
    background:#dff9fb;
    z-index: 1;
    
}

.box {
    width: 300px;
    height: 230px;
    padding: 60px 30px 30px 30px;
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
.box input[type="text"],
.box input[type="password"] {
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    border-radius: 24px;
    outline: none;
    padding: 14px 10px;
    width: 200px;
    color: white;
    transition: 0.25s;
}
.box input[type="text"]:focus,
.box input[type="password"]:focus {
    border-color: #27ae60;
    width: 250px;
}
.box input[type="submit"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
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
</style>
