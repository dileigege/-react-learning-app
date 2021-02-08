/*
 * @Descripttion:
 * @version:
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2021-02-08 14:59:31
 * @LastEditors: Oneself
 * @LastEditTime: 2021-02-08 16:14:36
 * @Statu: TODO:
 */
// const {
//     override,
//     fixBabelImports,
//     // addLessLoader,
// } = require("customize-cra");

// module.exports = override(
//     fixBabelImports("import", {
//         libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
//     }),

// );

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
        addLessLoader(),
    ),
}
