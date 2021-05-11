<template>
  <div>
    <div>
      <el-row :gutter="30">
        <el-col :span="6">
          <el-card shadow="hover">
            <v-row>
              <v-col>
                <div class="card-img">
                  <i class="iconfont el-icon-myfangwenliang" style="color:#40C9C6;"/>
                </div>
              </v-col>
              <div style="margin-right: 10%; margin-top: 10%">
                访客量
                <div>
                  <strong>
                    {{visNum}}
                  </strong>
                </div>
              </div>
            </v-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover">
            <v-row>
              <v-col>
                <div class="card-img">
                  <i class="el-icon-s-comment" style="color:#36A3F7;"/>
                </div>
              </v-col>
              <div style="margin-right: 10%; margin-top: 10%">
                留言量
                <div>
                  <strong>
                    {{commentNum}}
                  </strong>
                </div>
              </div>
            </v-row>
          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover">
            <v-row>
              <v-col>
                <div class="card-img">
                  <i class="iconfont el-icon-myuser" style="color:#34BFA3;"/>
                </div>
              </v-col>
              <div style="margin-right: 10%; margin-top: 10%">
                用户量
                <div>
                  <strong>
                    {{accountNum}}
                  </strong>
                </div>
              </div>
            </v-row>

          </el-card>
        </el-col>

        <el-col :span="6">
          <el-card shadow="hover">
            <v-row>
              <v-col>
                <div class="card-img">
                  <i class="iconfont el-icon-mywenzhang-copy" style="color:#F4516C;"/>
                </div>
              </v-col>
              <div style="margin-right: 10%; margin-top: 10%">
                文章量
                <div>
                  <strong>
                    {{articleNum}}
                  </strong>
                </div>
              </div>
            </v-row>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-card style="margin-top:1.25rem">
      <div style="font-size: 13px;color: #202a34;font-weight: 700;">一周访问量</div>
      <div style="height: 350px">
        <ve-line :data="visData" :colors="colors"></ve-line>
      </div>
    </el-card>

    <el-row :gutter="30" style="margin-top:1.25rem">
      <el-col :span="16">
        <el-card>
          <div class="e-title">文章浏览量排行</div>
          <div style="height:350px">
            <ve-histogram :data="blogData" :colors="colors"></ve-histogram>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div class="e-title">文章分类统计</div>
          <div style="height:350px">
            <ve-pie :data="categoriesData"></ve-pie>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    this.colors = ['#60C0FF']
    return {
      visNum:'',
      accountNum:'',
      articleNum:'',
      commentNum:'',
      visData: {
        columns: ['日期', '访问量'],
        rows: [
          // { '日期': '2018-05-22', '访问量': 32371 },
        ]
      },
      blogData: {
        columns: ['文章', '阅读量'],
        rows: [
          // {'文章':'test1','阅读量':'11111'}
        ]
      },
      categoriesData: {
        columns: ['分类', '数目'],
        rows: [
          // {'分类':'测试算法','数目':1},
          // {'分类':'测试1','数目':1}
        ]
      }
      // chartSettings: {
      //   // xAxis: {
      //   //   data: [],
      //   //   axisLine: {
      //   //     lineStyle: {
      //   //       // 设置x轴颜色
      //   //       color: "#60C0FF"
      //   //     }
      //   //   }
      //   // }
      //
      // }
    }
  },
  methods: {

  },
  beforeCreate() {
    this.$axios.get("/api/visitor/getVisNum").then(({data})=>{
      this.visNum = data;
    });
    this.$axios.get("/api/user/getNum").then(({data})=>{
      this.accountNum = data.data;
    });
    this.$axios.get("/api/blog/getBlogNum").then(({data})=>{
      // console.log(data.data)
      this.articleNum = data.data;
    });
    this.$axios.get("/api/comment/getNum").then(({data})=>{
      this.commentNum = data.data;
    });
    this.$axios.get("/api/visitor/getVisitData").then(({data})=>{
      // console.log(data.data);
      for (let item of data.data){
        this.visData.rows.push({
          "日期": item.date,
          "访问量": item.visitNum
        })
      }
    });
    this.$axios.get("/api/blog/getBlogData").then(({data})=>{
      for (let item of data.data){
        this.blogData.rows.push({
          '文章': item.blogTitle,
          '阅读量': item.blogVisitNum
        })
      }
    });
    this.$axios.get("/api/categories/getCategoriesData").then(({data})=>{
      for (let item of data.data){
        this.categoriesData.rows.push(
            {
              '分类': item.name,
              '数目': item.num
            }
        )
      }
    })

  }

}
</script>

<style scoped>
.card-img {
  font-size: 50px;

}

.card-content {
  font-weight: bold;

}
</style>