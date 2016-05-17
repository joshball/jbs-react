module.exports = {
    entry: './src/main.js',
    output: {
        path: './src',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './src',
        port: 2112
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exlude: /node_modules/, loader: 'babel' }
        ]
    }
}