import {get,post} from './index'
//获取轮播图数据
export function getSliders() {
  return get('/api/sliders')//这个获取数据的接口地址由后台给出
}
//获取首页热映电影数据
export function getHotMovie(offset,limit) {
  return get(`/api/movieList?showing=0&offset=${offset}&limit=${limit}`)
}