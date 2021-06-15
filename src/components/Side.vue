<template>
  <div>
    <v-card height="100%" width="250">
      <v-navigation-drawer permanent color="#304156" app>
        <!--结构为v-list-group=>template=>v-list-item-->
        <v-list dense nav>

          <v-list-item>
            <v-list-item-icon style="margin-right: 14%">
              <v-icon color="#fff">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
<!--              <router-link :to="'/home'+'/'+''">-->
              <router-link to="/">
                <v-list-item-title style="color: white">首页</v-list-item-title>
              </router-link>

            </v-list-item-content>
          </v-list-item>

          <v-list-group :value="false" v-for="item in items" :key="item.title" v-model="item.active" style="color: white">
            <template v-slot:activator>
              <v-list-item-icon><v-icon style="color: white">{{item.action}}</v-icon></v-list-item-icon>
              <v-list-item-title style="color: white">{{item.title}}</v-list-item-title>
            </template>
            <v-list-item v-for="child in item.items" :key="child.title" @click="add(
                // child.title
                {
                  name: child.title,
                  link: child.link
                }
                )">
              <v-list-item-icon style="margin-right: 5%"><v-icon style="font-size: medium; color: #7D837F">{{child.icon}}</v-icon></v-list-item-icon>
              <v-list-item-content style="font-size: small; color: #7D837F">{{child.title}}</v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item>
            <v-list-item-icon style="margin-right: 14%">
              <v-icon color="#fff">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/info">
                <v-list-item-title style="color: #fff">个人中心</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>



<!--          <v-list-item @click="console">-->
<!--            <v-list-item-icon style="margin-right: 17%">-->
<!--              <v-icon color="#fff">mdi-account</v-icon>-->
<!--            </v-list-item-icon>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title style="color: #fff">Test</v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->

        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
              icon: 'mdi-file-edit',
              link: '/article/add'
            },
            {
              title: '文章列表',
              icon: 'mdi-file-table',
              link: '/manage/article'
            },
            {
              title:'分类管理',
              icon: "mdi-code-tags",
              link: '/manage/tags'
            },
            {
              title:'标签管理',
              icon: 'mdi-tag-text',
              link: '/manage/categories'
            }
          ]
        },
        {
          title: '消息管理',
          action: 'mdi-message',
          items: [
            {
              title: '评论管理',
              icon: 'mdi-chat',
              link: '/manage/comment'
            },
            {
              title: '留言管理',
              icon: 'mdi-chat-processing',
              link: '/manage/message'
            }
          ]
        },
        {
          title: '用户管理',
          action: 'mdi-account-box-multiple',
          items: [
            {
              title: '用户列表',
              icon: 'mdi-account-multiple',
              link: '/user/list'
            },
            {
              title: '角色管理',
              icon: 'mdi-account-convert',
              link: '/user/role'
            },
            // {
            //   title: '在线用户',
            //   icon: 'mdi-account-clock',
            //   link: '/user/online'
            // },
          ]
        },
        {
          title: '系统管理',
          action: 'mdi-cog',
          items: [
            // {
            //   title: '菜单管理',
            //   icon: 'mdi-dots-horizontal-circle',
            //   link: '/manage/menu'
            // },
            // {
            //   title: '资源管理',
            //   icon: 'mdi-earth',
            //   link: '/manage/resource'
            // },
            // {
            //   title: '友链管理',
            //   icon: 'mdi-link-variant',
            //   link: '/manage/link'
            // },
            {
              title: '关于我',
              icon: 'mdi-information',
              link: '/about'
            },
          ]
        },
        {
          title: '日志管理',
          action: 'mdi-math-log',
          items: [
            {
              icon: 'mdi-head-cog',
              title: '操作日志',
              link: '/manage/log'
            }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['menuListItemAdd']),
    add(member){
      for (let item of this.menuList){
        if (item.name===member.name){
          // console.log(member);
          // this.$message.warning("不能存在重复的标签");
          if (this.$route.path!== member.link){
            this.$router.push(member.link);
          }

          return;
        }
      }
      if (this.menuList.length>10){
        this.$message.warning("不能容纳再多的标签页了");
        return;
      }
      this.menuListItemAdd(member);
      this.$router.push(member.link);
    },
    console(){
        // let item = this.menuList.pop();
        console.log(this.menuList);
      // console.log(this.menuList);
    }
  },
  computed: {
    ...mapState(["menuList"])
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