import axios from 'axios'
export function request(config){
  /* 创建axios实例*/
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  /* 拦截器*/
  //请求拦截
  instance.interceptors.request.use(config=>{
    return config
  },err=>{

  })
  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
  })
  /*发送正真的网络请求*/
  return instance(config)
}
