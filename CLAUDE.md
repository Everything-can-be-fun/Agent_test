# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 提供在本代码库中工作的指导。

## 项目规范

1. 本项目是 Electron + 原生 HTML/CSS/JavaScript 番茄钟应用
2. 不要使用 React、Vue、Vite、Webpack 或其他打包工具
3. 默认只允许修改 index.html、app.js、styles.css
4. 除非我明确要求，不要修改 main.js、package.json、package-lock.json
5. 不要创建无关新文件

## 开发规范

1. 永远使用中文和用户交流
2. 修改代码前，必须先说明准备修改哪些文件和原因
3. 每次修改后，必须提示用户运行：
   - node --check app.js
   - npm start
   - git diff
4. 如果需要提交代码，必须先执行 git status 和 git diff，并说明本次提交包含哪些文件
5. 如果连续两次编辑失败或卡住超过 2 分钟，应停止继续尝试，并告知当前状态
6. 优先做最小修改，不要重写整个项目
7. 如果只是要求分析、检查、评估，不要擅自修改文件
8. 如果没有明确要求提交，不要自动 git add、git commit、git push

## 代码结构

这是一个基于 Electron 的番茄钟应用程序，具有简单、自包含的架构：

- `main.js`: Electron 主进程文件，创建浏览器窗口
- `index.html`: UI 布局，包含计时器和控制按钮
- `app.js`: 应用程序逻辑，处理计时器操作、状态管理和 UI 更新
- `styles.css`: 应用程序界面的基本样式