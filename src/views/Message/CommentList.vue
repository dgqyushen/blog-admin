<template>
  <div>
    <el-card >
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>评论列表</strong>
      </div>
      <el-row>
        <el-col :span="20">
<!--          <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogVisible = true">新增分类</el-button>-->
          <el-button type="danger" size="small" @click="commentListVisible=true">批量删除</el-button>
        </el-col>
        <el-col :span="4">
<!--          <el-input v-model="searchName" placeholder="请输入你想搜索的分类" size="small" style="width: 50%"></el-input>-->
<!--          <el-button type="primary" size="small" icon="el-icon-search" style="margin-left: 2%">搜索</el-button>-->
        </el-col>
      </el-row>

      <el-table
          :data="commentData"
          style="width: 100%;
            height: 100%"
          @selection-change="handleSelectionChange"
      >

        <el-table-column
            type="selection"
            width="55"
        >
        </el-table-column>

<!--        <el-table-column-->
<!--            prop="categoryName"-->
<!--            label="分类名"-->
<!--            width="600">-->
<!--          <template slot-scope="scope">-->
<!--            <el-tag type="success">-->
<!--              {{ scope.row.categoryName }}-->
<!--            </el-tag>-->
<!--          </template>-->
<!--        </el-table-column>-->
        <el-table-column
            prop="categoryName"
            label="头像"
            width="100">
          <template slot-scope="scope">
<!--            <el-tag type="success">-->
<!--              {{ scope.row. }}-->
<!--            </el-tag>-->
            <el-avatar shape="square" :size="40" :src="scope.row.commentAvatar"></el-avatar>

          </template>
        </el-table-column>

        <el-table-column
            prop="commentAuthor"
            label="评论人"
            width="200">
        </el-table-column>

        <el-table-column
            prop="blogTitle"
            label="文章标题"
            width="300">
        </el-table-column>

        <el-table-column
            prop="commentContent"
            label="评论内容"
            width="300">
        </el-table-column>

        <el-table-column
            prop="commentDate"
            label="评论时间"
            width="400">
        </el-table-column>

        <el-table-column
            label="操作"
            width="400">
          <template slot-scope="scope">
            <el-button
                size="mini"
                type="danger"
                @click="remove(scope.row.commentId)">删除
            </el-button>
          </template>
        </el-table-column>

      </el-table>
    </el-card>

    <el-dialog
        title="提示"
        :visible.sync="commentListVisible"
        width="30%"
        :before-close="handleClose">
      <span>确认删除所选的评论吗吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="commentListVisible = false">取 消</el-button>
    <el-button type="primary" @click="send">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "CommentList",
  data() {
    return {
      commentData: [],
      commentList: [],
      commentListVisible: false,
      selectedList:[]

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
    handleSelectionChange(val) {
      this.commentList = val;
      // console.log(this.commentList);
    },
    send() {
      this.selectedList = [];
      this.commentList.forEach(e=>{
        this.selectedList.push(e.commentId);
      })
      let postData = this.selectedList
      // console.log(this.selectedList);
      this.$axios.post('/api/comment/deleteComments',postData).then(({data}) => {
        window.location.reload();
      })
    },
    remove(item){
      // console.log(item);
      // let url = 'http://localhost:8081'+'/deleteComment/'+item;
      // // console.log(url);
      // http://localhost:8081/comment/deleteComment/8

      this.$axios.post('/api/comment/deleteComment/'+item).then(({data}) => {
        window.location.reload();
      })
    }
  },
  beforeMount() {
    this.$axios.get('http://localhost:8081/comment/getCommentsData').then(({data}) => {
      // console.log(data.data);
      this.commentData = data.data;
    })
  }
}
</script>

<style scoped>

</style>