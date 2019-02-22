# 后台管理系统
npm install -g create-react-app

create-react-app --version 查看版本

添加less less-loader

yarn add less less-loader

修改 webpack.config.js 文件 // 重要三处 less 很重要

antd 按需加载

安装babel-plugin-import：npm install babel-plugin-import --save-dev

安装后打开根目录的package.json文件在babel的presets后面添加：
"plugins":[["import", {"libraryName": "antd", "style": "css"}]]

npm run install 后再启动项目 npm run start （重要！！！）
