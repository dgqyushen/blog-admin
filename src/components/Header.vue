<template>
  <div>
    <el-row>
      <!--      套element的壳，用vuetify组件-->
      <v-row>
        <v-col>
          <div>
            <v-icon>mdi-backburger</v-icon>
            {{ title }}
            <!--       会变得-->
          </div>
        </v-col>


        <!--        <div>-->
        <!--          <v-avatar style="margin-top: 10px">-->
        <!--            <img src="https://www.static.talkxj.com/avatar/user.png" alt="" sizes="10">-->
        <!--          </v-avatar>-->
        <!--        </div>-->
        <el-dropdown>
          <el-avatar :size="30" :src="avatar"/>
          <i class="el-icon-caret-bottom"/>
          <el-dropdown-menu slot="dropdown">
            <!--            <el-dropdown-item command="setting">-->
            <el-dropdown-item >
              <i class="el-icon-s-custom"/>个人中心
            </el-dropdown-item>
            <!--            <el-dropdown-item command="logout" divided>-->
            <el-dropdown-item>
              <i class="iconfont el-icon-mytuichu"/>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </v-row>
    </el-row>


    <el-row>

<!--      <template>-->
<!--        <v-tabs>-->
<!--          <v-tab v-for="item in menuList" active-class=".active">-->
<!--            <div>{{item}}</div>-->
<!--          </v-tab>-->
<!--        </v-tabs>-->
<!--      </template>-->
      <div>
        <el-tag  v-for="(item,index) in menuList" closable effect="plain" @close="close(index)" :key="index" style="margin-right: 7px" @click.middle="close(index)">
          <router-link :to="item.link">
            {{item.name}}
          </router-link>
        </el-tag>
      </div>


      <hr style="margin-top: 5px">


    </el-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapMutations } from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      title: '首页',
      avatar: 'https://www.static.talkxj.com/avatar/user.png',
    }
  },
  computed: {
    ...mapState(["menuList"])
  },
  methods: {
    ...mapMutations(['menuListItemDel']),
    close(index){
      this.menuListItemDel(index);
      // alert(index);

    }
  }

}
</script>

<style scoped>
.active{
 background-color: red;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}

</style>