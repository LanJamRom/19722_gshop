# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 1 开启项目研发
    使用vue-cli+webpack 构建项目
    npm install安装所有依赖
## 2 搭建项目整体界面结构
    vue-router的理解和使用
      router-view/router-link/keep-alive
      $router:路由器对象，来实现编程式导航(跳转路由)
      $route:当前路由器对象，一些当前路由信息的容器，path/meta/query/params
    项目路由拆分
    底部导航FooterGuide
    导航路由组件：Msite/Search/Order/Profile
## 3 抽取组件
     头部组件：HearderTop，通过slot来实现组件通信标签结构
     商家列表组件：ShopList
## 4 登录路由组件
    FooterGuide的显示/隐藏，通过路由的meta
## 5 异步数据
     封装ajax：
      promise+axios封装ajax请求的函数
      封装每个接口对应的请求函数
      跨域问题：前端配置proxyTable，或者后台node中配置
     vuex编码
      创建所有相关的模块: store/index|state|mutations|actions|getters|mutation-types
      实现index：创建最核心store对象
      设计state：从后台获取数据
      实现actions：
        异步actions: async/await
        流程：发送ajax请求数据，commit给mutations
      实现mutations：
        给状态state赋值
      main.js中配置store对象
     组件异步显示数据
      在mounted中通过$store.dispath('xxx')来异步获取后台数据到state中
      mapState(['xxx'])读取state中的数据到组件中
     什么时候创建swiper对象，如何在数据更新之后创建swiper
      (1)使用回调+$nextTick()
      (2)watch+$nextTick()
     分发事件：this.$emit('eventName', data),相当于自定义事件
## 6 组件
    vue transitions动画
      &.fade-enter-active, &.fade-leave-active
        //transition transform .3s
        //transition all .3s
      &.fade-enter, &.fade-leave-to
        //transform translateY(0)
        //opacity 0
        //background rgba(7, 17, 27, 0)
    一般方法给一个已有绑定的对象中添加一个新的属性, 这个属性没有数据绑定
    解决：
      Vue.set(obj, 'xxx', value) //有数据绑定效果
      this.$set(obj, 'xxx', value) //有数据绑定效果
      
## 7 项目优化
    使用keep-alive对router-view组件进行缓存
    路由组件懒加载：
      写成一个import方法，调用的时候才执行
      // import MSite from '../pages/Msite/Msite'
      const MSite = () => import('../pages/Msite/Msite')
    图片懒加载: vue-lazyload
    
