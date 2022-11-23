module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator", // 双问号 判断null 和 undefined
  ],
};
