import request from '@/utils/request'

export const newsPublish = (data) => {
  return request({
    method: 'post',
    url: 'adminapi/news/publish',
    data
  })
}

export const getNewsListService = () => {
  return request({
    url: 'adminapi/news/getlist'
  })
}

export const newsChangeOk = (data) => {
  return request({
    url: 'adminapi/news/changeOk',
    method: 'post',
    data
  })
}

export const newsDel = (data) => {
  return request({
    url: 'adminapi/news/newsDel',
    method: 'delete',
    data
  })
}

export const getnewsItemService = (params) => {
  return request({
    url: 'adminapi/news/getnewsItem',
    params
  })
}

export const newsUpdata = (data) => {
  return request({
    method: 'post',
    url: 'adminapi/news/newsUpdata',
    data
  })
}
