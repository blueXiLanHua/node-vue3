import request from '@/utils/request'

export const delProductItemService = (data) => {
  return request({
    url: 'adminapi/product/delProductItem',
    method: 'delete',
    data
  })
}

export const getProductListService = () => {
  return request({
    url: 'adminapi/product/getList'
  })
}

export const productAddService = (data) => {
  return request({
    url: 'adminapi/product/add',
    method: 'post',
    data
  })
}

export const productgetItemService = (data) => {
  return request({
    url: 'adminapi/product/getItem',
    params: data
  })
}

export const productUpdataService = (data) => {
  return request({
    url: 'adminapi/product/updataItem',
    data: data,
    method: 'post'
  })
}
