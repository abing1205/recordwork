<template>
  <a-layout class="layout">
    <a-layout-header>
      <img class="logo" src="https://yupi.icu/logo.png"/>
      <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          @click="toPage"
      >
        <a-menu-item key="/">主页</a-menu-item>
        <a-menu-item key="/task">创建任务</a-menu-item>
        <a-menu-item key="/analysis">分析</a-menu-item>
      </a-menu>
    </a-layout-header>


    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
<!--        <a-breadcrumb-item>Home</a-breadcrumb-item>-->
<!--        <a-breadcrumb-item>List</a-breadcrumb-item>-->
<!--        <a-breadcrumb-item>App</a-breadcrumb-item>-->
      </a-breadcrumb>

      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      阿炳 ©2018 Created by Ant UED{{new Date()}}
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue';
import { useRoute,useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()
// const selectedKeys = ref<string[]>(["/"])
const selectedKeys = computed(() => {
  return [route.path];
})
const toPage = ({key}:{key:string}) => {
  router.push({
    path: key
  })

  }
</script>

<style scoped>
.logo {
  height: 42px;
  float: left;
  margin-top: 12px;
  margin-right: 12px;
}

.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>