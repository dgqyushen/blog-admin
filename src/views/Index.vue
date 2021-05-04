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
        <v-chart>

        </v-chart>
      </div>
    </el-card>

  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      visNum:'',
      accountNum:'',
      articleNum:'',
      commentNum:''
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