import request from '@/utils/request'

export const userLoginService = (data) => {
  return request({
    method: 'post',
    url: 'adminapi/user/login',
    data
  })
}
export const userUploadService = (data) => {
  return request({
    method: 'post',
    url: 'adminapi/user/upload',
    data
  })
}

export const userAddService = (data) => {
  return request({
    method: 'post',
    url: 'adminapi/user/add',
    data
  })
}

export const userListService = () => {
  return request({
    url: 'adminapi/user/list'
  })
}

export const userDelListService = (_id) => {
  return request({
    method: 'delete',
    url: 'adminapi/user/dellist',
    params: {
      _id
    }
  })
}

export const userUploadUserInfo = (data) => {
  return request({
    method: 'post',
    url: 'adminapi/user/uploadUserInfo',
    data
  })
}
