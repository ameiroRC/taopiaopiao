const HOST = 'http://localhost:8090';

export function get(url) {
  return fetch(HOST + url, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Accept": "application/json"
    }
  }).then(res => res.json())
}

export function post(url, data) {
  return fetch(HOST + url, {
    method: "POST",
    credentials: "include",//向服务器发送请求的时候需要带上cookie
    headers: {
      "Accept": "application/json",//请求头的数据格式（需要返回的数据格式）
      "Content-type": "application/json"//请求体的数据格式（推送过去的数据格式）
    },
    body: JSON.stringify(data)//请求体的数据转化为JSON格式的字符串
  }).then(res=>res.json())//将返回的数据转化成JSON格式
}