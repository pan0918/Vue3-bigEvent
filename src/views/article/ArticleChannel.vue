<script setup>
import { ref } from 'vue'
import { artGetChannelsService } from '@/api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
const channelList = ref([])
const loading = ref(false)

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  console.log(channelList.value)
  loading.value = false
}
getChannelList()

// const onEditChannel = (row, $index) => {

// }

// const onDelChannel = (row, $index) => {

// }
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button>添加分类</el-button>
    </template>

    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row, $index }">
          <el-button
            :icon="Edit"
            plain
            circle
            type="primary"
            @click="onEditChannel(row, $index)"
          ></el-button>
          <el-button
            :icon="Delete"
            plain
            circle
            type="danger"
            @click="onDelChannel(row, $index)"
          ></el-button>
        </template>
      </el-table-column>

      <template #empty>
        <el-empty description="No Data"></el-empty>
      </template>
    </el-table>
  </page-container>
</template>

<script></script>

<style lang="scss" scoped></style>
