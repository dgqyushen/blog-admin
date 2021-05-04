<template>
  <div>
    <v-card height="100%" width="220" class="mx-auto">
      <v-navigation-drawer permanent color="#304156" right>
        <!--结构为v-list-group=>template=>v-list-item-->
        <v-list dense nav>

          <v-list-item>
            <v-list-item-icon style="margin-right: 17%">
              <v-icon color="#fff">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link :to="'/home'+'/'+'test111111'">
                <v-list-item-title style="color: white">首页</v-list-item-title>
              </router-link>

            </v-list-item-content>
          </v-list-item>




          <v-list-group :value="false" v-for="item in items" :key="item.title" v-model="item.active" style="color: white">
            <template v-slot:activator>
              <v-list-item-icon><v-icon style="color: white">{{item.action}}</v-icon></v-list-item-icon>
              <v-list-item-title style="color: white">{{item.title}}</v-list-item-title>
            </template>
            <v-list-item v-for="child in item.items" :key="child.title" @click="add(child.title)">
              <v-list-item-icon style="margin-right: 5%"><v-icon style="font-size: medium; color: #7D837F">{{child.icon}}</v-icon></v-list-item-icon>
              <v-list-item-content style="font-size: small; color: #7D837F">{{child.title}}</v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item>
            <v-list-item-icon style="margin-right: 17%">
              <v-icon color="#fff">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color: #fff">个人中心</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "Side",
  data() {
    return {
      items: [
        // {
        //   title: '首页',
        //   action: 'mdi-home'
        // },
        {
          title: '文章管理',
          action: 'mdi-file',
          items: [
            {
              title: '添加文章',
              icon: 'mdi-file-edit'
            },
            {
              title: '文章列表',
              icon: 'mdi-file-table'
            },
            {
              title:'分类管理',
              icon: "mdi-code-tags"
            },
            {
              title:'标签管理',
              icon: 'mdi-tag-text'
            }
          ]
        },
        {
          title: '消息管理',
          action: 'mdi-message',
          items: [
            {
              title: '评论管理',
              icon: 'mdi-chat'
            },
            {
              title: '留言管理',
              icon: 'mdi-chat-processing'
            }
          ]
        },
        {
          title: '用户管理',
          action: 'mdi-account-box-multiple',
          items: [
            {
              title: '用户列表',
              icon: 'mdi-account-multiple'
            },
            {
              title: '角色管理',
              icon: 'mdi-account-convert'
            },
            {
              title: '在线用户',
              icon: 'mdi-account-clock'
            },
          ]
        },
        {
          title: '系统管理',
          action: 'mdi-cog',
          items: [
            {
              title: '菜单管理',
              icon: 'mdi-dots-horizontal-circle'
            },
            {
              title: '资源管理',
              icon: 'mdi-earth'
            },
            {
              title: '友链管理',
              icon: 'mdi-link-variant'
            },
            {
              title: '关于我',
              icon: 'mdi-information'
            },
          ]
        },
        {
          title: '日志管理',
          action: 'mdi-math-log',
          items: [
            {
              icon: 'mdi-head-cog',
              title: '操作日志'
            }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['menuListItemAdd']),
    add(member){
      this.menuListItemAdd(member);
    }

  }
}
</script>

<style scoped>
/*.el-header, .el-footer {*/
/*  background-color: #B3C0D1;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 60px;*/
/*}*/

/*.el-aside {*/
/*  background-color: #D3DCE6;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 200px;*/
/*}*/

/*.el-main {*/
/*  background-color: #E9EEF3;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 160px;*/
/*}*/

/*body > .el-container {*/
/*  !*margin-bottom: 40px;*!*/
/*}*/

/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/
</style>