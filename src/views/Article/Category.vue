<template>
  <div>
    <el-card>
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>标签列表</strong>
      </div>
      <el-row>
        <el-col :span="18">
          <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogVisible = true">新增分类</el-button>
          <el-button type="danger" size="small" @click="categoryListVisible=true">批量删除</el-button>
        </el-col>
        <el-col :span="6">
          <el-input v-model="searchName" placeholder="请输入你想搜索的分类" size="small" style="width: 50%"></el-input>
          <el-button type="primary" size="small" icon="el-icon-search" style="margin-left: 2%">搜索</el-button>
        </el-col>
      </el-row>

      <el-table
          :data="categoryData"
          style="width: 100%;
            height: 500px"
          @selection-change="handleSelectionChange"
      >
        <el-table-column
            type="selection"
            width="55"
        >
        </el-table-column>
        <el-table-column
            prop="categoryName"
            label="分类名"
            width="600">
          <template slot-scope="scope">
            <el-tag type="success">
              {{ scope.row.categoryName }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
            prop="categoryCreatedDate"
            label="创建时间"
            width="600">
        </el-table-column>
        <el-table-column
            label="操作"
            width="400">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="edit(scope.row.categoryId)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="remove(scope.row.categoryId)">删除
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>

    <el-dialog
        title="新增分类"
        :visible.sync="dialogVisible"
        width="20%"
        :before-close="handleClose">
      <!--      <span>这是一段信息</span>-->
      <span><el-input v-model="categoryName" style="width: 100%"></el-input></span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addCategory">添 加</el-button>
    </span>
    </el-dialog>

    <el-dialog
        title="修改分类"
        :visible.sync="editVisible"
        width="20%"
        :before-close="handleClose">
      <!--      <span>这是一段信息</span>-->
      <span><el-input v-model="categoryName" style="width: 100%"></el-input></span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="editVisible = false">取 消</el-button>
    <el-button type="primary" @click="editCategory">修 改</el-button>
    </span>
    </el-dialog>

    <el-dialog
        title="提示"
        :visible.sync="categoryListVisible"
        width="30%"
        :before-close="handleClose">
      <span>确认删除所选的标签吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="categoryListVisible = false">取 消</el-button>
    <el-button type="primary" @click="send">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      categoryName: '',
      categoryData: [],
      dialogVisible: false,
      editVisible: false,
      categoryListVisible: false,
      searchName:'',
      selectedList: [],
      categoryList:[],
      categoryId:''
    }
  },
  methods: {
    addCategory() {
      let data = {
        name: this.categoryName
      }
      this.$axios.post('/api/categories/addCategory',data);
      this.dialogVisible = false;
      window.location.reload();
    },
    editCategory(){
      let postData = {
        name: this.categoryName,
        id: this.categoryId
      }
      this.$axios.post('/api/categories/editCategory',postData).then(({data}) => {
        window.location.reload();
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
    edit(item) {
      this.editVisible = true;
      this.categoryId = item;
      // alert(item);
    },
    remove(item){
      this.$axios.post('/api/categories/deleteCategory/'+item.toString()).then(({data}) => {
        window.location.reload();
      });
    },
    handleSelectionChange(val) {
      this.categoryList = val;
    },
    send() {
      this.selectedList = [];
      this.categoryList.forEach(e =>{
        this.selectedList.push(e.categoryId);
      });
      // console.log(this.selectedList);
      let categoryList = this.selectedList;
      // console.log(categoryList);
      this.$axios.post("http://localhost:8081/categories/deleteCategories",categoryList).then(({data}) => {
        console.log(data);
      });
      window.location.reload();

      // console.log(this.selectedList);
    },
  },
  beforeMount() {
    this.$axios.get('/api/categories/getCategoryInfo').then(({data}) => {
      // console.log(data.data[0]);
      this.categoryData = data.data;
    })
  }
}
</script>

<style scoped>

</style>