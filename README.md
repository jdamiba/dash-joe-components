How to async components

1 add it to aysnc_resources in __init__.py - be careful not to edit generated code
2 create async component in /src/fragments - this is where you import npm libraries
3 create LazyLoader js function => export default () => import(/* webpackChunkName: “chunkName” */ '../../fragments/ComponentName.react’);
4 create component in src/components that imports the lazy loader, wraps it in suspense - this is where prototypes are defined (async component in fragments imports these definitions)
5 update src/index.js to export your new component
6 update web pack config

```json
optimization: {
        minimizer: [
        new TerserPlugin({
                sourceMap: true,
                parallel: true,
                cache: './.build_cache/terser',
                terserOptions: {
                warnings: false,
                ie8: false
                }
        })
        ],
        splitChunks: {
        name: true,
        cacheGroups: {
                async: {
                chunks: 'async',
                minSize: 0,
                name(module, chunks, cacheGroupKey) {
                        return `${cacheGroupKey}-${chunks[0].name}`;
                }
                },
                shared: {
                chunks: 'all',
                minSize: 0,
                minChunks: 2,
                name: 'dash_joe_components-shared'
                }
        }
        }
},
plugins: [
        new WebpackDashDynamicImport(),
        new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        exclude: ['async-plotlyjs']
        })
]
```
