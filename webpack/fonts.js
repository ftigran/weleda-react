module.exports = function () {
    return {
        module: {
            rules: [{
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: 'file-loader',
                options: {
                    path: "src/img",
                    name: '[name].[ext]',
                        outputPath: (url, resourcePath, context) => {
                          // `resourcePath` is original absolute path to asset
                          // `context` is directory where stored asset (`rootContext`) or `context` option
              
                          // To get relative path you can use
                          // const relativePath = path.relative(context, resourcePath);
                          if (/fonts\/.*\.svg/g.test(resourcePath)) {
                            return `webfonts/${url}`;
                          }
                          return `images/${url}`
                        },
                },
            }, ],
        },
        
    };
};