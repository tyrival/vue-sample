# 开发规范

## 目录结构

### 概述

```
|-public   静态资源文件，不参与webpack编译，用于存放静态json数据、js中引用的图片等资源文件
|-src
  |-assets
    |-images
    |-styles 
      |-common
        |-element-override  基于ElementUI的默认样式进行覆盖，从而构建自定义样式
          |-components      如需某个ElementUI组件的样式进行修改（例如：按钮大小，表格行高等），可在此建立相应的scss文件，然后在 index.scss 中引入，组件修改会覆盖element-override的修改
          |-element-override.scss   如需修改ElementUI默认的全局样式（例如：主色调，字号，线色等），可以将其中相应的变量取消注释，并进行修改；
          |-index.scss      用于引入修改后的组件样式
          |-var.scss        声明自定义样式的公用变量
          ...
|-components    组件
|-config        声明全局常量，以及统一管理API
|-fonts         iconfont
|-plugin        插件
|-router        路由
|-store         vue-store，储存token等全局变量、状态
|-utils         工具
|-views         视图

```
