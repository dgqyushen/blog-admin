<template>
  <div>
    <el-card>
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>用户列表</strong>
      </div>
      <el-row>
      </el-row>

      <el-table
          :data="userList"
          style="width: 100%;
            height: 500px"
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
            <el-tag>{{ scope.row.roleDescription }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
            label="禁用"
            width="180">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.userLocked"
                       active-color="#ff4949"
                       @change="setReverse(scope.row.userId)"
            ></el-switch>
          </template>
        </el-table-column>

        <el-table-column
            prop="userLoginIP"
            label="登录ip"
            width="180">
        </el-table-column>

        <el-table-column
            prop="userLoginLocation"
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
            width="250">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="openDialog(scope.row)"
                type="primary"
            >编辑
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>


    <el-dialog
        title="修改用户"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>
        <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.userName" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" style="width: 80%"></el-input>
        </el-form-item>
        <el-form-item label="角色">
<!--          <el-checkbox-group v-model="form.role" :min="1" :max="1">-->
          <!--            <el-checkbox :label=item v-for="item in roleList" :key="item"></el-checkbox>-->
          <!--          </el-checkbox-group>-->
          <el-radio-group v-model="form.role">
            <el-radio v-for="item in roleList" :label=item :key=item></el-radio>
<!--            <el-radio :label="3">备选项</el-radio>-->
<!--            <el-radio :label="6">备选项</el-radio>-->
<!--            <el-radio :label="9">备选项</el-radio>-->
      </el-radio-group>
        </el-form-item>
      </el-form>
      </span>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="send">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      userList: [],
      dialogVisible: false,
      form: {
        userId:'',
        userName: '',
        password: '',
        role: []
      },
      roleList: []
      // button: false,
    }
  },
  methods: {
    setReverse(item) {
      let postData = {
        id: item
      }
      // console.log(item);
      this.$axios.post("/api/user/setUserLocked", postData).then(({data}) => {
        // console.log(data);
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    openDialog(item) {
      this.form.role = [];
      console.log(item);
      // console.log(this.form.role);
      this.dialogVisible = true;
      this.form.userName = item.userUserName;
      this.form.userId = item.userId;
      // this.form.role.push(item.roleDescription);
      this.form.role = item.roleDescription;
    },
    send() {
      // console.log(this.form);
      let postData = this.form
      this.$axios.post('/api/user/setUserInfo', postData).then(({data}) => {
        console.log(data);
      })
      this.dialogVisible = false;
    }
  },
  beforeMount() {
    this.$axios.get('/api/user/getUserRoleData').then(({data}) => {
      this.userList = data.data;
    });
    this.$axios.get('/api/role/getAllRoleDescriptions').then(({data}) => {
      this.roleList = data.data;
      // console.log(this.roleList);
    })
  }
}
</script>

<style scoped>

</style>