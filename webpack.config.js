module.exports = {
  entry: "./app-client.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
     {
       exclude: /(node_modules|app-sever.js)/,
       loader: 'babel',
       query:
         {
           presets:['react']
         }
     }
    ]
  }
};
