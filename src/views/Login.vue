<template>
  <div class="login-container">
    <div class="login-card">
      <v-card>
        <v-card-title>
          <span class="headline">后台博客管理登录</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    label="用户名:"
                    required
                    v-model="loginForm.username"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="密码:"
                    type="password"
                    required
                    v-model="loginForm.password"
                    @keydown.enter="login"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div style="background: dodgerblue;border-radius: 5px">
            <v-btn text @click="login" style="color: white">
              登录
            </v-btn>
          </div>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      let viewUser = this.loginForm;
      console.log(viewUser)
      this.$axios.post("/api/user/login",viewUser).then(({data})=>{
        if (data.code===200){
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.$router.push("/home")

        }else {
          this.$message.error('登录失败');
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url(http://tvax2.sinaimg.cn/large/005IuFOngy1gpqhh5lttpj32yo1o0tzv.jpg) center center /
    cover no-repeat;

}

.login-card {
  background: white;
  width: 500px;
  margin: 100px auto;
  border-radius: 10px;
}

</style>