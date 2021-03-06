const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }, 
  devServer: {
    contentBase: "./dist"
  },
  devtool: "source-map",
  module:{
    rules:[
        {
            test:/\.(sass|scss)$/,
            use:['style-loader','css-loader','sass-loader']
        }
   ]
  }
}