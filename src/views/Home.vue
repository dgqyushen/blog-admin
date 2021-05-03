<template>
<!--  <div>-->
<!--    <el-container style="height: 1010px">-->


<!--      <el-container>-->
<!--        <Side></Side>-->
<!--        <el-main>-->

<!--          <Header></Header>-->
<!--          Main-->
<!--        </el-main>-->
<!--      </el-container>-->
<!--    </el-container>-->


<!--  </div>-->
  <el-container >
<!--    <el-aside width="200px">Aside</el-aside>-->
    <Side></Side>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>

      <el-main>
<!--        <Index></Index>-->
        <router-view></router-view>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Side from "@/components/Side";
import Index from "@/views/Index"
export default {
  name: "Home",
  components: {
    Header,
    Side,
    Index
  }
}
</script>

<style scoped>
/*.el-header, .el-footer {*/
/*  background-color: #B3C0D1;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 60px;*/
/*}*/
.el-header{
  margin-top: 20px;
  /*background-color: #B3C0D1;*/
}

/*.el-aside {*/
/*  background-color: #D3DCE6;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 200px;*/
/*}*/

.el-main {
  /*background-color: #E9EEF3;*/
  /*color: #333;*/
  /*text-align: center;*/
  /*line-height: 160px;*/
}

/*body > .el-container {*/
/*  !*margin-bottom: 40px;*!*/
/*}*/

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/

</style>