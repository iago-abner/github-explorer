Anotações:

1- todo projeto utilizando JS, JSX ou NODE, inicia baixando o pacote package.JSON, utilizando o comando: 'yarn init -y' ou 'npm init -y'

2- instalar as dependencias no json como: 'yarn add react', 'yarn add react-dom'

3- criar as pastas 'src' e 'public'->'index.html'

4- instalar o babel: 'yarn add @babel/core @babel/cli @babel/preset-env -D'

5- criar um arquivo 'babel.config.js' 

6- criar o arquivo 'src/index.js' e converter utilizando o babel com: 'yarn babel src/index.js -o dist/bundle.js'
'-o' é para gerar um arquivo a partir do anterios, no caso, 'index.js'. E o nome 'bundle.js' é convenção do arquivo gerado pelo babel

7- agora para utilizar o react no babel: 'yarn add @babel/preset-react -D', depois de instalar precisamos definir na configuração do babel e colocar '@babel/preset-react' em presets

8- instalar as dependencias:  'webpack webpack-cli webpack-dev-server -D' e criar seu arquivo de config

9- utilizar o a função path do node, para definir caminhos dentro do webpack.config.js em diferentes SO

10- 'yarn add babel-loader -D' integração do babel com webpack 

11- 'yarn add html-webpack-plugin -D' para manter o index estático, adicionar 'template: path' do arquivo static, no caso, colocará o script do bundle automaticamente no index.html (removemos o script do bundle em body)

12- para rodar o webpack-server basta adicionar no webpack: 'devServer{static: path(pasta)},' e rodar 'yarn webpack serve'

13- source maps para identificar erro no código 'src' e não no 'bundle.js' gerado pelo babel/webpack (são 2 tipos de map, um para desenvolvimento e outro para produção). basta adicionar no webpack config "devTool:'eval-source-map',"

14 - criar uma variável executar/identificar quando estiver em ambiente de desenvolvimento ou de produção

15- criar scripts no package.json: 'dev' para desenvolvimento e 'build' para produção

16- adicionar o css, e pôr em webpack para identificar o arquivo css e ler com 'style-loader', 'sass' e 'css-loader' precisa baixar as dependencias 'sass style-loader css-loader -D'

17- instalando 'sass-loader -D' e onde tínhamos em rules '/\.css$/' passamos para '/\.scss$/', por fim em 'use' adicionamoso sass-loader .: 'use: ['style-loader','css-loader', 'sass-loader']'.
mudamos o arquivo 'global.css' -> 'global.scss'









