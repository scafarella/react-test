const HttpProxyAgent = require('http-proxy-agent');

const productController = {

  all(req,res){
      fetch('http://www.matchesfashion.com/nms/ajax/p/1095470,1095483,1095472,1095467',{
        agent: new HttpProxyAgent({
          host: 'proxy.reply.it',
          port: '8080'
        })
      })
      .then(response => response.json())
      .then(data => res.json(data))
      .catch(err => {
        res.json({code: 'GENERIC_ERROR', error:'Generic Error'})
        console.error(err)
      })
  }
}

module.exports = productController
