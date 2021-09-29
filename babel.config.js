module.exports = {
    presets:[
        '@babel/preset-env',
        //configurando o preset-react com runtime para não precisar importar react em todo o arquivo
        ['@babel/preset-react',{
            runtime: 'automatic'
        }]
    ]
}