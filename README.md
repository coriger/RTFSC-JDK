<div align="center">
  <img src="./assets/rtfsc-jdk-icon.png" alt="RTFSC-JDK Icon">
  <img alt="Netlify" src="https://img.shields.io/netlify/55b8443d-bcdd-4762-bfeb-a016cdebdbb1?style=plastic">
  <img alt="GitHub" src="https://img.shields.io/github/license/HurleyJames/RTFSC-JDK?style=plastic">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/HurleyJames/RTFSC-JDK?style=plastic">
</div>

## 🥳 RTFSC-JDK是什么？

> Reading The Fucking Source Code of JDK.

本项目主要是存放JDK11的**源码**与**笔记**：

* 对于代码`src`部分，建议在`OracleJDK / OpenJDK 11`的环境下阅读代码，阅读过程中产生的部分笔记会以**注释**的形式写在源码中。
* 对于文档`docs`部分，建议访问文档的[网站](https://rtfsc.hurley.fun/)进行阅读。

![网站截图](https://i.loli.net/2021/01/17/L2b6moOfSvx7cnz.png)

## 📝 使用说明

1. 将[本项目](https://github.com/HurleyJames/RTFSC-JDK)克隆或者下载到本地。
2. `src`部分可以使用IntelliJ IDEA打开阅读并调试。请注意，该源代码不支持直接编译，如果想完整编译整个JDK项目，请参考官方教程[Building the JDK](https://hg.openjdk.java.net/jdk/jdk11/raw-file/tip/doc/building.html)。
3. `docs`部分是源码阅读的笔记，可以`cd docs`进入目录，输入`npm install`安装相关依赖，然后使用`npm run docs:dev`运行启动，可以自行编写。
4. 如果有缺失遗漏或者源码解读错误的地方，欢迎在[Github Issues](https://github.com/HurleyJames/RTFSC-JDK/issues)中提出，我会尽量及时反馈更新。

## ⚛️ Commit图例

| Emoji | 含义 |
:-: | ---- |
| 🎉 | 初始化项目 |
| 📝 | 更新文档，包括且不仅限于README |
| 💡 | 发布/增加新的阅读笔记 |
| ♻️ | 重构/修改已有的阅读笔记 |
| 🛠 | 新增或更新代码有关的内容 |
| ✏️ | 校对，更改排版等 |
| ✅ | 发布测试文件 |

## 🔗 相关链接

* [Oracle JDK](https://www.oracle.com/java/technologies/oracle-java-archive-downloads.html)
* [OpenJDK](http://jdk.java.net/archive/)

## 💖 支持

如果您认为该文档和项目都不错，并且想继续支持我从事编写该文档和项目，您可以通过以下**任意**的方式支持我：

* star或者分享[该项目](https://github.com/HurleyJames/RTFSC-JDK) 🌟
* 参与到该项目文档的编写中 🛠
* 赞助我一杯星巴克 ☕️

不论怎样，您对本文档的访问都已经是对我最大的支持，谢谢！

## 🙇‍♂️ 鸣谢

此项目受到[LeaningJDK](https://github.com/kangjianwei/LearningJDK)项目的启发，JDK部分的主要源码也是克隆至该项目，后期加上自己的解读，希望大家到[kangjianwei](https://github.com/kangjianwei)的项目中多多支持与star。