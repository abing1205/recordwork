<template>
  <a-list item-layout="horizontal" :data-source="workList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name }}</a>
          </template>

          <template #avatar>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
          <template #description>
            <ul>
              <li>描述:{{item.description}}</li>
              <li>标签:{{item.tags}}</li>
              <li>时长:{{item.duration}}</li>
              <li>计划时长:{{item.planTime}}</li>
              <li>创建时长:{{item.createTime}}</li>
            </ul>
          </template>

        </a-list-item-meta>

      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import {onMounted, reactive , ref} from "vue";
import request from "../plugins/myAxios";

let workList = reactive([])


onMounted(async ()=>{
  let {data} = await request.get("/api/work/list")
  console.log("before",workList)
  workList.push(...data)
  console.log("data",data)
  console.log("workList",workList)
})


</script>

<style scoped>

</style>