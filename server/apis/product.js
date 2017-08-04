require('isomorphic-fetch');
require('es6-promise').polyfill();
const HttpProxyAgent = require('http-proxy-agent');

const product = {
  all(){
    return fetch('http://www.matchesfashion.com/nms/ajax/p/1095470,1095483,1095472,1095467',{
      agent: new HttpProxyAgent({
        host: 'proxy.reply.it',
        port: '8080'
      })
    })
    .then(response => response.json())
  }
}

module.exports = product
