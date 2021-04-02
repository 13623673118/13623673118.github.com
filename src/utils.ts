export const fullStyle = [
  `
/**
 * @author singleDogNo.1
 * @copyright https://github.com/lost-dream
 * @description 大家好，我是赵晨敏。话不多说，下面是我的简历。
 */

/* 给所有元素加上过渡效果 */
* {
  transition: all 0.1s;
}
/* 设置背景颜色 */
html {
  color: rgb(222, 222, 222);
  background: rgb(0, 64, 64);
}
#content {
  height: 70vh;
  margin: 0;
}
#foot {
  height: 29vh;
  margin: 0;
}

/* 设置边框 */
.styleEditor {
  padding: 0.5em;
  border: 1px solid;
  margin: 0.5em;
  overflow: auto;
  width: 50vw;
  height: 70vh;
  background: rgb(20, 20, 20);
}
/* 代码高亮 */
.token.selector {
  color: rgb(130, 150, 0);
}
.token.property {
  color: rgb(190, 140, 0);
}
.token.punctuation {
  color: yellow;
}
.token.function {
  color: rgb(40, 160, 150);
}

/* 加3D效果 */
html {
  perspective: 1000px;
}
.styleEditor {
  position: fixed;
  left: 0;
  top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px);
  transform: rotateY(10deg) translateZ(-100px);
}

/* 准备一个编辑器 */
.resumeEditor {
  position: fixed;
  right: 0;
  top: 0;
  padding: 0.5em;
  margin: 0.5em;
  width: 50vw;
  height: 70vh;
  border: 1px solid;
  background: rgb(200, 200, 200);
  color: #222;
  overflow: auto;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(-10deg) translateZ(-100px);
  transform: rotateY(-10deg) translateZ(-100px);
}
/* 开始写简历 */
`,
  `
/* 将Markdown格式翻译成HTML
 * 再对HTML加点样式
 */
.resumeEditor {
  padding: 2em;
}
.resumeEditor h2 {
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 0.5em;
}
.resumeEditor ul,
.resumeEditor ol {
  list-style: none;
}
.resumeEditor ul > li::before {
  content: "•";
  margin-right: 0.5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: 0.5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: 0.5em;
  background: #ddd;
}
`,
  `
/* 写封感谢信。
 * 感谢大家对我的关注。
 */
.styleEditor {
  width: 50vw;
  height: 70vh;
}

.resumeEditor {
  width: 50vw;
  height: 70vh;
}

.thankEditor {
  position: relative;
  left: 0;
  top: 0;
  background: #e9d9bb;
  color: #001c42;
  overflow: auto;
}

.thankEditor {
  width: 99vw;
  height: 45vh;
  border: 1px solid #ccc;
  font-size: 0.9em;
}
  `,
  `
.thankEditor {
  padding: 0.5em;
  margin: 0.5em;
  margin-top: 1em;
}

.thankEditor ul,
.thankEditor ol {
  list-style: none;
}
.thankEditor ul > li::before {
  content: "☞";
  color: red;
  margin-right: 0.5em;
}
.thankEditor ol {
  counter-reset: section;
}
.thankEditor ol li::before {
  counter-increment: section;
  content: counters(section, "☞") " ";
  margin-right: 0.5em;
}

.thankEditor {
  width: 99vw;
  height: 45vh;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateX(10deg) translateZ(-200px) translateY(-50px);
  transform: rotateX(10deg) translateZ(-200px) translateY(-50px);
}
  `
]

export const fullMarkdown = `
赵晨敏
====

坐标：山西省太原市（现在天津和平区）。

高级web前端开发工程师，暂不考虑离职。

技能
====

html + css3
----
  - 熟练使用html5标签，audio/video基本api以及web存储
  - 熟练掌握css3变形&&过渡&&动画

JS
----
  - 熟练掌握ES6语法
  - 掌握webpack并深入理解其机制
  - 熟练使用vue全家桶进行web开发
  - 了解前后端数据传输机制，熟练与后端通信
  - 初步了解NodeJs，可以使用NodeJs开发简单的后端功能
  - 开发过一款微信小程序

工作经历
----
  - 陕西博智营销
  - 上海敬庸科技有限公司

教育经历
----
吕梁学院 食品科学工程 大学本科

个人空间
----
* [GitHub](https://github.com/lost-dream)
* [个人简历](https://lost-dream.github.io)
* [个人博客](https://lost-dream.github.io/blog)
* [前端知识点个人总结](https://lost-dream.github.io/course)
`

export const thanksMarkdown = `
写在最后
----
* hello, world!!

`
