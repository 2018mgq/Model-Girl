const {
    override,
    fixBabelImports,
    addWebpackAlias
} = require('customize-cra');

const path = require("path");

module.exports = override(
    //按需加载antd
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    //别名配置
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "./src"),
        ["@view"]: path.resolve(__dirname, "./src/view"),
        ["@components"]: path.resolve(__dirname, "./src/components"),
        ["@actions"]:path.resolve(__dirname,"./src/actions"),
        ["@common"]:path.resolve(__dirname,"./src/common"),
        ["@api"]:path.resolve(__dirname,"./src/api"),
        ["@mapprops"]:path.resolve(__dirname,"./src/mapprops"),
    })
);