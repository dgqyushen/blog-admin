<template>
  <div>
    <el-card>
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>关于我</strong>
      </div>
      <el-row :gutter="20" style="margin-bottom: 2%">

      </el-row>

      <div>
        <mavon-editor style="height:calc(100vh - 260px)" v-model="content"></mavon-editor>
      </div>


      <el-row style="margin-top: 1%">
        <el-col :span="1" :offset="23">
          <el-button type="primary" @click="send">修改</el-button>
        </el-col>
      </el-row>
    </el-card>


  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      content: ''
    }
  },
  methods: {
    send(){
      let postData = {
        content: this.content
      }
      this.$axios.post('/api/about/set',postData).then(()=>{
        this.$message({
          message: '修改成功',
          type: 'success'
        });
        setTimeout(function (){

          window.location.reload();
        }, 1500);
        // window.location.reload();
      })
    }
  },
  beforeMount() {
    this.$axios.get('/api/about/get').then(({data}) => {
      this.content = data.data;
    })
  }
}
</script>

<style scoped>

</style>