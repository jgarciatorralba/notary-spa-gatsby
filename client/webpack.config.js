const webpack = require("webpack")

module.exports = (env, argv) => {
  const mode = argv.mode || "development"

  return {
    mode,
    resolve: {
      mainFields: ["main", "module"],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
    ],
  }
}
