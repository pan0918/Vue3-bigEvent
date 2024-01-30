import request from '@/utils/request'

// 获取文章分类
export const artGetChannelsService = () => {
  return request.get('/my/cate/list')
}

// 添加文章分类
export const artAddChannelService = (data) => {
  return request.post('/my/cate/add', data)
}

// 更新文章分类
export const artEditChannelService = (data) => {
  return request.put('/my/cate/info', data)
}

// 删除文章分类
export const artDelChannelService = (id) => {
  return request.delete('/my/cate/del', {
    params: {
      id
    }
  })
}

// 获取文章列表
export const artGetListService = (params) => {
  return request.get('/my/article/list', {
    params
  })
}

// 添加文章
export const artPublishService = (data) => {
  request.post('/my/article/add', data)
}

// 获取文章详情
export const artGetDetailService = (id) => {
  return request.get('/my/article/info', {
    params: { id }
  })
}

// 文章更新
export const artEditService = (data) => {
  return request.put('/my/article/info', data)
}
