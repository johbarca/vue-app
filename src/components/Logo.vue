<template>
    <div class="main">
        <div class="next" @click="back">
            <i class="fas fa-arrow-left"></i>
        </div>
        <div class="slider"></div>
        <div style="margin-top:10px">
            <el-upload
                action
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :http-request="uploadFileMethod"
                multiple
            >
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="visible">
                <img width="100%" :src="imageUrl" alt>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
    name: "logo",
    data() {
        return {
            imageUrl: "",
            visible: false
        };
    },
    methods: {
        back() {
            this.$router.push({ path: "/main" });
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            console.log(file);
            this.imageUrl = file.url;
            this.visible = true;
        },
        uploadFileMethod(file) {
            console.log(file)
            console.log(this.imageUrl+"hello")
            // let fileObject = param.file;
            /* let formData = new FormData();
            formData.append("file", fileObject); */
            /* this.$http
                .post("upload", { formData: fileObject })
                .then(response => {
                    if (Array.isArray(response)) {
                        if (response) {
                            this.$message({
                                showClose: true,
                                message: "上传成功。",
                                type: "success"
                            });
                            this.getFileList(id);
                        }
                    } else {
                        this.$message.error(response.message);
                    }
                    console.log("response==", response);
                })
                .catch(() => {}); */
            /* this.$store
                .dispatch("UploadFile", { formData: formData, id: id })
                .then(response => {
                    if (Array.isArray(response)) {
                        if (response) {
                            this.$message({
                                showClose: true,
                                message: "上传成功。",
                                type: "success"
                            });
                            this.getFileList(id);
                        }
                    } else {
                        this.$message.error(response.message);
                    }
                    console.log("response==", response);
                })
                .catch(message => {
                    console.log("message======================", message);
                    this.$message.error("上传失败，请联系管理员");
                }); */
        }
    }
};
</script>
<style scoped>
.main {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #313131;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    font-family: "";
}
.next {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    /* background: white; */
    margin: 20px;
    padding: 10px;
    font-size: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.next:hover {
    background: white;
    color: #30336b;
    transition: 0.5s;
    cursor: pointer;
}
.slider {
    width: 600px;
    height: 400px;
    margin: 100px auto;
    background: url(/static/photo1.jpg) no-repeat;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 0 0 15px lightgray;
    animation: slide 20s infinite;
}
@keyframes slide {
    25% {
        background: url(/static/photo1.jpg) no-repeat;
        background-size: cover;
    }
    50% {
        background: url(/static/photo2.jpg) no-repeat;
        background-size: cover;
    }
    75% {
        background: url(/static/photo3.jpg) no-repeat;
        background-size: cover;
    }
    100% {
        background: url(/static/photo4.jpg) no-repeat;
        background-size: cover;
    }
}
</style>
