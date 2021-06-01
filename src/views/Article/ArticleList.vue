<template>
  <div>
    <el-card>
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>文章列表</strong>
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

      <!--      <el-table-->
      <!--          :data="tableData"-->
      <!--          style="width: 100%">-->
      <el-table
          :data="tableData"
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
            prop="blogTitle"
            label="标题"
            width="180">
        </el-table-column>
        <el-table-column
            prop="categoriesName"
            label="分类"
            width="180">
        </el-table-column>
        <!--        以后加入tags标签后再加入这个-->
        <!--        <el-table-column-->
        <!--            prop="blogTitle"-->
        <!--            label="标签"-->
        <!--            width="180">-->
        <!--        </el-table-column>-->
        <el-table-column
            prop="visitNum"
            label="浏览量"
            width="180">
        </el-table-column>
        <el-table-column
            prop="likeNum"
            label="点赞量"
            width="180">
        </el-table-column>
        <el-table-column
            prop="blogCreated"
            label="发表时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="blogModified"
            label="更新时间"
            width="180">
        </el-table-column>
        <el-table-column
            label="置顶"
            width="180">
          <template slot-scope="scope">
            <el-switch
                v-model="scope.row.blogTop"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changeTop(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column
            label="操作"
            width="180">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="edit(scope.row.blogId)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="remove(scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>确认删除所选的博客吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="deleteItems">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {
      options: [
        {
          value: '1',
          label: '已发布'
        },
        {
          value: '2',
          label: '回收站'
        },
        {
          value: '3',
          label: '草稿箱'
        },
      ],
      value: '已发布',
      article: '',
      tableData: [],
      originTableData: [],
      selectedList: [],
      dialogVisible: false,
      blogIdList:[]

    }
  },
  methods: {
    changeTop(item) {
      let viewBlogs = {
        id: item.blogId,
        title: '',
        content: '',
        author: '',
        image: '',
        isTop: item.blogTop
      }
      this.$axios.post("/api/blog/setBlogTop", viewBlogs).then(({data}) => {
        console.log(data);
      });
    },
    remove(item) {
      let data = {
        blogId: item.blogId
      }
      this.$axios.post("/api/blog/deleteBlog/" + item.blogId).then(({data}) => {
        // console.log(data);
        window.location.reload();
        this.$message.success("删除成功");
      })
    },
    edit(item) {
      // console.log(item);
      this.$router.push("/article/edit/" + item);

    },
    handleSelectionChange(val) {
      this.selectedList = val;
    },
    openDialog(){
      this.dialogVisible = true;
    },
    deleteItems() {
      if (this.selectedList.length === 0){
        this.blogIdList = [];
        // console.log(this.blogIdList);
      }else {
        this.selectedList.forEach(e => {
          // console.log(e.blogId);
          this.blogIdList.push(e.blogId);
        })
        // console.log(this.blogIdList);
      }
      let blogIdList = this.blogIdList;
      this.$axios.post('/api/blog/deleteBlogs',blogIdList);
      this.dialogVisible = false;
      window.location.reload();

    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    }

  },

  watch: {
    article: function (newValue, oldValue) {
      if (newValue === "") {
        this.tableData = this.originTableData;
        window.location.reload();

        // this.location.reload();

      } else {
        // console.log(newValue);
        // console.log(oldValue);
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].blogTitle.includes(newValue)) {

          } else {
            this.tableData.splice(i, 1);
            // console.log(this.tableData);
          }
        }
      }


    }
  },
  beforeMount() {
    this.$axios.get("/api/blog/getBlogInfo").then(({data}) => {
      this.tableData = data.data;
      this.originTableData = this.tableData;
    });

  }
}
</script>

<style scoped>

</style>