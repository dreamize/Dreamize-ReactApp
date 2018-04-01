const path = require("path");

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 80,
        contentBase: path.resolve(__dirname, "public")
    },

    module: {
            rules: [
                {
                    test: /\.js$/,                    
                    exclude: /node_modules/,
                    use:{
                        loader: 'babel-loader'
                    }
                }
            ]
        }
};
