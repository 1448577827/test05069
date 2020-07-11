//index.js:项目入口的js文件

//1.使用ES6提供的一个导入模块的方法: import  接收被暴露出来的成员  from  '包名'
import $ from  "jquery"

//2. 问题: 浏览器不识别ES6导入的方式
//3. 解决:通过webpack打包成浏览器能识别的语法
     //a.根目录下载npm i webpack-cli  webpack -D
     //b.用webpack命令

//webpack . \src\index.js -o .\dist\main.js  有警告
//webpack .\src\index.js -o .\dist\main.js --mode development   清除警告
// 总结  让index 打包到 dist里面的main.js

//CSS
//使用ES6的语法导入css文件  import "css路径"
import './css/index.css'
//问题:webpack目前只能处理js文件类似与jquery,美元办法处理非JS的文件
//解决:使用合适的第三方loader加载器
//1.npm i style-loader css-loader --save-dev
//2.webpack.config.js
    //module: { // 用来配置第三方loader模块的
    //         rules: [ // 文件的匹配规则
    //             { test: /\.css$/, use: ['style-loader', 'css-loader'] }//处理css文件的规则
    //         ]
    //     }



//LESS
import './css/index.less'
//问题:webpack目前只能处理js文件类似与jquery,美元办法处理非JS的文件
//解决:使用合适的第三方loader加载器
//1.npm i less-loader less -D
//2.webpack.config.js
//module: { // 用来配置第三方loader模块的
//         rules: [ // 文件的匹配规则
//            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }//处理css文件的规则
//         ]
//     }


//配置字体图标库 如何使用bootstrap中的图标库
// 下载 : npm i bootstrap@3.3.7
// //不写node_modules目录, 会自动去node_modules中去找
// 导入 : import 'bootstrap/dist/css/bootstrap.css'
// 配置 : {test:/\.(ttf|woff2|woff|eot)$/,use:['url-loader']},



$(function () {
    $("li:odd").css("background","pink");
    $("li:even").css("background","red");
})