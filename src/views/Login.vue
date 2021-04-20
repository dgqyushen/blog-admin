<template>
  <div class="login-container">
    <div class="login-card">
      <!--      <div class="login-title">管理员登录</div>-->
      <!--      <el-form :label-position="left">-->
      <!--        <el-form-item label="用户名">-->
      <!--          <el-input v-model="loginForm.username" ></el-input>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="密码">-->
      <!--          <el-input type="password" v-model="loginForm.password"></el-input>-->
      <!--        </el-form-item>-->
      <!--        <el-form-item>-->
      <!--          <el-button type="primary" @click="submit">提交</el-button>-->
      <!--&lt;!&ndash;          <el-button @click="resetForm('ruleForm')">重置</el-button>&ndash;&gt;-->
      <!--        </el-form-item>-->
      <!--      </el-form>-->
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
      this.$axios.get("http://localhost:8081/ping").then(({data})=>{
        console.log(data);
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
  background: url(https://www.static.talkxj.com/0w3pdr.jpg) center center /
    cover no-repeat;

}

.login-card {
  background: white;
  width: 500px;
  margin: 100px auto;
  border-radius: 10px;
}

</style>