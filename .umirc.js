const umircConfig = require("@ali-whale/umirc-dva");

const umircExport = {
  ...umircConfig,
  base: "/app1",
  publicPath: "/app1/",
  outputPath: "./dist/app1",
  mountElementId: "app1",
  targets: { ie: 11 },
  plugins: [
    [
      "umi-plugin-react",
      {
        title: "app1",
        antd: true,
        dva: true,
        routes: {
          exclude: [
            /models|services|components\//,
            (o) => /[A-Z]/.test(o.component),
            (o) => !/[\\/]((index)|(404)|(_layout))[\\.]js$/.test(o.component),
          ],
        },
      },
    ],
    // ["@ali-whale/umi-plugin-cbd-ui"],
    ["@umijs/plugin-qiankun"],
  ],
};
module.exports = umircExport;
