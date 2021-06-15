<template>
  <div>
    <el-card>
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>角色列表</strong>
      </div>
      <el-row>

        <el-col :span="20">
          <!--          <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogVisible = true">新增分类</el-button>-->
          <el-button type="primary" size="small" @click="openDialog">添加权限</el-button>
        </el-col>
        <el-col :span="4">
          <!--          <el-input v-model="searchName" placeholder="请输入你想搜索的分类" size="small" style="width: 50%"></el-input>-->
          <!--          <el-button type="primary" size="small" icon="el-icon-search" style="margin-left: 2%">搜索</el-button>-->
        </el-col>

      </el-row>

      <el-table
          :data="roleData"
          style="width: 100%;
            height: 100%">
        <el-table-column
            prop="roleName"
            label="角色名字"
            width="300">
        </el-table-column>
        <el-table-column
            prop="roleDescription"
            label="角色描述"
            width="300">
          <template slot-scope="scope">
            <el-tag>{{ scope.row.roleDescription }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="permissionName"
            label="权限名称"
            width="300">
        </el-table-column>
        <el-table-column
            prop="permissionTag"
            label="权限标签"
            width="300">
        </el-table-column>
        <el-table-column
            prop="permissionUrl"
            label="权限url"
            width="300">
        </el-table-column>
      </el-table>
    </el-card>


    <el-dialog
        title="添加权限"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>
          <el-form v-model="form">
            <el-form-item label="角色">
              <el-select  placeholder="请选择" v-model="form.roleId">
                <el-option v-for="item in roleList" :key="item.roleId" :value="item.roleId" :label="item.roleName"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="权限描述" style="width: 60%">
              <el-input placeholder="请输入权限描述" v-model="form.permissionDescription"></el-input>
            </el-form-item>
            <el-form-item label="权限url" style="width: 60%">
              <el-input placeholder="请输入权限url" v-model="form.permissionUrl"></el-input>
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
  name: "RoleList",
  data() {
    return {
      roleData: [],
      dialogVisible: false,
      form: {
        roleId:'',
        permissionDescription: '',
        permissionUrl: ''

      },
      roleList: [],
      value:''
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    openDialog(){
      this.dialogVisible = true;
      this.roleData.forEach(e=>{
        // set.add(e.roleName);
        this.roleList.push({
          roleName: e.roleName,
          roleId: e.roleId
        })
      });

      let stringArr = this.roleList.map((item,index,array)=>{
        return JSON.stringify(item)
      });
      let filterArr = stringArr.filter((item,index,array)=>{
        return array.indexOf(item) === index;
      });
      let lastArr = filterArr.map((item,index,array)=>{
        return JSON.parse(item);
      });
      this.roleList = lastArr;
    },
    send(){
      let postData = this.form;
      this.$axios.post("/api/permission/saveRolePermission",postData).then(({data})=>{
        // console.log(data);
      });
      window.location.reload();
    }
  },
  beforeMount() {
    this.$axios.get("/api/role/getRolePermissionData").then(({data}) => {
      this.roleData = data.data;
      console.log(this.roleData);
    })
  }
}
</script>

<style scoped>

</style>