
     var crypto = require('crypto');


     exports.handler = async function (event){


     var key = '2PBP7IABZ2' ;
     var txnid = 'braitsch00237';
     var amount = '2400' ;
     var productinfo = 'appleWatch' ;
     var firstname = 'sandeep' ;
     var phone = '9090909090';
     var email = 'mahesh@gmail.com' ;
     var salt = process.env.SALT ;
     var myValue = key+txnid+amount+productinfo+firstname+phone+email+salt ;
    //  var hash = crypto.createHash('sha512').update(myValue).digest('hex');
     return {
           statusCode : 200 ,
           body : JSON.stringify(myValue) 
         };
}


