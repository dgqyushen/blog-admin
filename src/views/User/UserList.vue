<template>
  <div>
    <el-card>
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>用户列表</strong>
      </div>
      <el-row>
        <el-col :span="18">
          <el-button type="danger" @click="openDialog">批量删除</el-button>
        </el-col>
        <el-col :span="3">
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-input
              placeholder="请输入内容"
              v-model=article>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
      </el-row>

      <el-table
          :data="userList"
          style="width: 100%;
            height: 500px"
          @selection-change="handleSelectionChange"
          border
      >

        <el-table-column
            prop="userAvatar"
            label="头像"
            width="180">
          <template slot-scope="scope">
            <el-avatar shape="square" :size="30" :src="scope.row.userAvatar"></el-avatar>
          </template>
        </el-table-column>

        <el-table-column
            prop="userUserName"
            label="昵称"
            width="180">
        </el-table-column>

<!--        <el-table-column-->
<!--            prop="blogTitle"-->
<!--            label="登陆方式"-->
<!--            width="180">-->
<!--        </el-table-column>-->

        <el-table-column
            prop="blogTitle"
            label="用户角色"
            width="180">
          <template slot-scope="scope">
            <el-tag>{{scope.row.roleDescription}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
            prop="blogTitle"
            label="禁用"
            width="180">

          <template slot-scope="scope">
            <el-switch v-model="button"></el-switch>
          </template>
        </el-table-column>

        <el-table-column
            prop="blogTitle"
            label="登录ip"
            width="180">
        </el-table-column>

        <el-table-column
            prop="blogTitle"
            label="登录地址"
            width="180">
        </el-table-column>

        <el-table-column
            prop="userCreatedDate"
            label="创建时间"
            width="180">
        </el-table-column>

        <el-table-column
            prop="userLastLogin"
            label="上次登录时间"
            width="180">
        </el-table-column>

        <el-table-column
            prop="blogTitle"
            label="操作"
            width="78">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click=""
                type="primary"
            >编辑
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data(){
    return {
      userList:[],
      button: false,
    }
  },
  methods:{

  },
  beforeMount() {
    this.$axios.get('http://localhost:8081/user/getUserRoleData').then(({data}) => {
      this.userList =data.data;
      console.log(this.userList);
    })
  }
}
</script>

<style scoped>

</style>