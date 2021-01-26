---
home: true # 标记此页面是否为首页
lang: zh-CN # 表示本页面的语言为zh-CN(简体中文)
heroImage: /hero.png
heroText: null # 首页的标题内容
actionText: 进入源码笔记 → # 首页跳转按钮的内容
actionLink: /notes/
features: # 表明首页的特征，固定的格式为title + details，以三栏流式布局的方式展示
  - title: 📦 开箱即用
    details: 笔记部分直接在此阅读，源码部分可以将项目克隆或下载到本地后，使用 IntelliJ IDEA 打开
  - title: 🔋 VuePress 驱动
    details: 以 Markdown 为中心的项目结构，打造阅读记录分析 JDK 源码的知识笔记
  - title: 👨🏻‍💻 关于我
    details: 🎓 一名刚毕业的 🇬🇧 利兹大学 Advanced Computer Science (AI) 硕士
footer: MIT Licensed | Copyright © 2021-present Hurley Huang # 为底部内容，与普通的网页一样，我们可以在footer里面写版权信息
---

## 🥳 RTFSC-JDK 是什么？

> Reading The Fucking Source Code of JDK.

本项目主要是存放 JDK11 的**源码**与**笔记**，建议在`OracleJDK / OpenJDK 11`的环境下阅读代码，阅读过程中产生的部分笔记会以**注释**的形式写在源码中，完整的笔记文档即`docs`中的内容，部署在[本网站](https://rtfsc.hurley.fun/)中。

## 📝 使用说明

1. 将[本项目](https://github.com/HurleyJames/RTFSC-JDK)克隆或者下载到本地。
2. `src`部分可以使用 IntelliJ IDEA 打开阅读并调试。请注意，该源代码不支持直接编译，如果想完整编译整个 JDK 项目，请参考官方教程[Building the JDK](https://hg.openjdk.java.net/jdk/jdk11/raw-file/tip/doc/building.html)。
3. `docs`部分是源码阅读的笔记，可以`cd docs`进入目录，输入`npm install`安装相关依赖，然后使用`npm run docs:dev`运行启动，可以自行编写。
4. 如果有缺失遗漏或者源码解读错误的地方，欢迎在[Github Issues](https://github.com/HurleyJames/RTFSC-JDK/issues)中提出，我会尽量及时反馈更新。

## 💖 支持

如果您认为该文档和项目都不错，并且想继续支持我从事编写该文档和项目，您可以通过以下**任意**的方式支持我：

* star 或者分享[该项目](https://github.com/HurleyJames/RTFSC-JDK) 🌟
* 参与到该项目文档的编写中 🛠
* 赞助我一杯星巴克 ☕️

不论怎样，您对本文档的访问都已经是对我最大的支持，谢谢！

## 🙇‍♂️ 鸣谢

此项目受到[LeaningJDK](https://github.com/kangjianwei/LearningJDK)项目的启发，JDK 部分的主要源码也是克隆至该项目，后期加上自己的解读，希望大家到[kangjianwei](https://github.com/kangjianwei)的项目中多多支持与 star。