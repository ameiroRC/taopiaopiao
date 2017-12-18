#项目名称：淘票票
##创建项目
+ 初始化环境
+ 下载相应安装包，创建webpack.config.js文件，书写webpack打包规则（没有用脚手架）
+ 创建index.html文件，作为页面主主体，需要进行移动适配，引进图标，设置根元素
+ 创建src文件，里面创建index.js文件，作为文件入口
+ 创建server文件夹
，里边放后台的文件
+ 创建api，components文件夹（公用组件），containers文件夹（子路由），store文件夹（仓库），style文件夹（公共样式），images文件夹（项目使用的图片数据）

##技术栈
+ 基本框架：React，node.js
+ 前端插件：React-Redux，react-router-dom，less,
+ 打包工具：webpack
+ 后台插件：express

##注意事项
+ 下载包用yarn add下载，npm会导致别的包丢失

##src
+ APP.js用来存放路由；
+ index.js中，将store传给组件，并且render渲染根组件

##components（公用组件）
+ Tab组件设置路由在页面上有几个link节点，也就是有页面下边有几个按钮

##containers（页面级组件）
+ Home是首页
+ Cinema是影院（第二个按钮页面）
+ Mine是我的页面（第三个按钮）
+ CinemaDetail是影院详情
+ FilmDetail是电影详情
+ sell是售票选做

##store（仓库）