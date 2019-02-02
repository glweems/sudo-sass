module.exports = {
  presets: ["@vue/app"],
  plugins: [["module-resolver", {
    "root": ["./src"],
    "alias": {
      "#": "./src/components/",
      "~": "./node_modules/",
      "underscore": "lodash"
    }
  }]]
};
