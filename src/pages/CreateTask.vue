<template>
  <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
  >
    <a-form-item
        label="任务名称"
        name="name"
        :rules="[{ required: true, message: 'Please input your 任务名称!' }]"
    >
      <a-input v-model:value="formState.name" />
    </a-form-item>

    <a-form-item
        label="任务描述"
        name="description"
        :rules="[{ required: true, message: 'Please input your 任务描述!' }]"
    >
      <a-input v-model:value="formState.description" />
    </a-form-item>

    <a-form-item
        label="时长"
        name="duration"
        :rules="[{ required: false, message: 'Please input your 时长!' }]"
    >
      <a-input v-model:value="formState.duration" />
    </a-form-item>

    <a-form-item
        label="标签"
        name="tags"
        :rules="[{ required: true, message: 'Please input your 标签!' }]"
    >
      <a-input v-model:value="formState.tags" />
    </a-form-item>

    <a-form-item
        label="计划时间"
        name="planTime"
    >
      <a-date-picker show-time v-model:value="formState.planTime"  />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">

import request from "../plugins/myAxios";
import WorkType from "../config/work"
import { reactive } from 'vue';
import {message} from "ant-design-vue";
import {useRouter} from "vue-router";

const formState = reactive<WorkType>({
  name: '学 Java',
  description: '学习 Java 集合类',
  duration: 3600,
  tags: ['学习', 'Java'],
  planTime: undefined,
});
let router = useRouter()

const mockFormState = reactive<WorkType>({
  name: '学 Java',
  description: '学习 Java 集合类',
  duration: 3600,
  tags: ['学习', 'Java'],
  planTime: undefined,
});
//value代表
const onFinish = async(values: any) => {
  //将数组转化成字符串
  values.tags = JSON.stringify(values.tags)
  let res = await request.post("/api/work/create",values)
  console.log("res",res)

  if(res.code === 0){
    message.success("插入成功")
    router.push({
      path:"/"
    })
  }else{
    message.error("插入失败")
  }
  console.log("nihaoya")
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

<style scoped>

</style>