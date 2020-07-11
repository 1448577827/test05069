//webpack 的配置文件
//由于webpack 基于node进行构建的,所以,在webpack配置文件中,任何合法的nonde代码都是支持的

const  path = require('path');

// 导入自动生成HTMl文件的插件
var htmlWebpackPlugin = require('html-webpack-plugin');

//通过node操作的模块中,向外暴露出一个配置对象
module.exports = {
    //配置打包模式为开发模式
    mode:"development",
    //配置入口文件
    entry:path.join(__dirname,'./src/index.js'),
    //指定要打包到哪一个目录
    output:{
        path:path.join(__dirname,'./dist'),//打包到哪一个目录
        filename:'main.js', // 打包后的文件名

    },
    plugins:[//所以的webpackd所以的插件,一般都要配置到这个节点上
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),//指定的模板路径
            filename:'index.html', //设置生成内存页面的名称
        })

    ],
    module: { // 用来配置第三方loader模块的

        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//处理css文件的规则
            { test: /\.(png|jpg|gif)$/, use: 'url-loader',use:'url-loader?limit=(176652' }//图片
        ]
    }
}
