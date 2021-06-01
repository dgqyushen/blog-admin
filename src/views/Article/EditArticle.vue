<template>
  <div>
    <el-card>
      <div style="font-size: medium; margin-bottom: 5px">
        <strong>编辑文章</strong>
      </div>

      <el-row :gutter="20" style="margin-bottom: 2%">
        <el-col :span="19">
          <el-input placeholder="请输入文章标题" v-model="blog.title"></el-input>
        </el-col>
        <el-col :span="4" :offset="1">
          <!--          <el-button type="info" plain @click="send">保存草稿</el-button>-->
          <el-button type="primary" @click="dialogVisible = true">修改文章</el-button>
        </el-col>
      </el-row>

      <div>
        <mavon-editor style="height:calc(100vh - 260px)" v-model="blog.content"></mavon-editor>
      </div>
    </el-card>

    <el-dialog title="上传文章" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form>
        <el-form-item label="文章分类">
          <el-select v-model="category" placeholder="请选择分类" allow-create filterable>
            <el-option v-for="(item,index) in categoryList" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章标签">
          <el-select v-model="tag" placeholder="请选择分类">
            <el-option v-for="(item,index) in tagList" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传封面">



          <el-upload
              drag
              action="/api/upload/"
              :on-success="uploadCover"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <!--            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
          </el-upload>



        </el-form-item>
        <el-form-item label="是否置顶">
          <el-switch v-model="blog.isTop" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>

      <!--      <span slot="footer" class="dialog-footer">-->
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="send">发表</el-button>
      <!--  </span>-->
    </el-dialog>
    <!--    <mavon-editor></mavon-editor>-->
  </div>

</template>

<script>
export default {
  name: "EditArticle",
  data() {
    return {
      blog: {
        id: this.$route.params.id,
        title: '',
        content: '',
        author: '',
        image: '',
        isTop: false
      },
      dialogVisible: false,
      categoryList:[],
      category:'',
      tagList:[],
      tag:'',
    }
  },
  methods: {
    send() {
      let viewBlogs = this.blog
      let category = {
        id: null,
        blogId: this.$route.params.id,
        name: this.category
      }
      this.$axios.post("/api/blog/updateBlog", viewBlogs).then(({data}) => {
        console.log(data);
      });
      console.log(category)
      this.$axios.post("/api/categories/insertCategory",category).then(({data}) => {
        console.log(data);
      })
      this.dialogVisible = false;
      this.$message.success("修改文章成功");
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },
    uploadCover(reponse){
      this.blog.image = reponse;
      console.log(reponse);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    }
  },
  beforeMount() {
    this.$axios.get("/api/categories/getCategoriesList").then(({data})=>{

      this.categoryList = data.data;
    })
    let that = this;
    console.log(this.$route.params.id);

    this.$axios.get('/api/blog/getOneById',{
      params: {
        id: that.$route.params.id
      }
    }).then(({data})=>{
      console.log(data.data.blog);
      this.blog.title = data.data.blog.blogTitle;
      this.blog.content = data.data.blog.blogContent;
      // console.log(this.blog.title);
      // console.log(this.blog.content);

    })
  }
}
</script>

<style scoped>
/*.title{*/
/*  font-size: small;*/
/*}*/

</style>