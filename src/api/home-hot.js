import {get,post} from './index'

export function getSliders() {
  return get('/api/sliders')//这个获取数据的接口地址由后台给出
}