
var crypto = require('crypto');


exports.handler = async function (event){


     var name = 'braitsch';
     var hash = crypto.createHash('sha512').update(name).digest('hex');
   return {
           statusCode : 200 ,
           body : JSON.stringify(hash) 
         };
}


