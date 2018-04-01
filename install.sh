apt-get update
apt-get install -y software-properties-common
apt-get install curl
curl -sL https://deb.nodesource.com/setup_8.x | bash -  
apt-get update
apt-get install -y nodejs
apt-get install -y npm

npm install -g babel webpack webpack-cli webpack-dev-server
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack 
npm install --save-dev babel-plugin-syntax-flow babel-plugin-syntax-jsx babel-plugin-syntax-object-rest-spread babel-plugin-syntax-trailing-function-commas babel-plugin-transform-flow-strip-types babel-plugin-transform-object-rest-spread babel-plugin-transform-react-jsx babel-plugin-transform-regenerator babel-plugin-transform-runtime babel-preset-env
npm install --save-dev react react-dom classnames immutable 
npm install --save-dev flux
