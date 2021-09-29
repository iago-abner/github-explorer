//por causa da difereça de escrita do path nos SO, precisaremos utilizar:
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlungin = require('@pmmmwh/react-refresh-webpack-plugin');

//variável 'NODE_ENV' para identificar se está em ambiente de desenvolvimento
const isDevelopment = process.env.NODE_ENV !== 'production';

//'entry' indica o arquivo principal
module.exports = {
    //mode desenvolvimento, mais ágil porém sem a otimização que utilizará para produção, no caso usariamos: 'production'
    mode: isDevelopment ? 'development' : 'production',
    //arquivo de entrada:
    entry: path.resolve(__dirname,'src', 'index.jsx'), //isso para usar a barra correta de acordo com o SO
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    //arquivo de saída:
    output: { //o arquivo que será gerado usando o webpack
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        //quando tem o "?", mas n tem o ":" podemos substituir apenas por "&&"
        isDevelopment && new ReactRefreshWebpackPlungin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),

    ].filter(Boolean), //se estiver em desenvolvimento retornará 'reactrefresh', caso contrário retornará falso, 
    //para isso usamos o 'filter(boolean)' para remover o 'false', pois plugin não iria reconhecer

    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true
    },

    resolve: {
        //por padrão webpack lerá apenas .js então usaremos para ler tb .jsx:
        extensions: ['.js', '.jsx'],
    },

    module: {
        //configurar o 'module' .: definir como irá se comportar para cada tipo de arquivo
        rules: [
            {
                //tudo: toda vez que identificar um jsx, utilizará babel-loader p ler esse arquivo
                // 'test' verificar se o arquivo é jsx
                test: /\.jsx$/,
                //'exclude' excluir todos os arquivos do node_modules
                exclude: /node_modules/,
                //será utilizado para gerar os novos códigos, basicamente a integração entre webpack e babel
                //ou seja, quando importar um arquivo jsx, irá converter usando o babel-loader para um arquivo que o browser entenda
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins:[
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ],
    }
};