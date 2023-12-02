var axios = require('axios');
var sha512 = require('js-sha512');
var crypto = require('crypto');



var key = process.env.KEY ;
var txnid = 'braitsch00237';
var amount = '2400' ;
var productinfo = 'appleWatch' ;
var firstname = 'sandeep' ;
var phone = '9090909090';
var email = 'mahesh@gmail.com' ;
var salt = process.env.SALT ;
var myValue = key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+phone+'|'+email+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+salt ;
var hash = crypto.createHash('sha512').update(myValue).digest('hex');
var zash = sha512.sha512(myValue);



exports.handler = async function (event,res){

const encodedParams = new URLSearchParams();
encodedParams.set('key', key);
encodedParams.set('txnid', txnid);
encodedParams.set('amount', amount);
encodedParams.set('productinfo', productinfo);
encodedParams.set('firstname', firstname);
encodedParams.set('phone', phone);
encodedParams.set('email', email);
encodedParams.set('surl', 'https://akhilsteel.in');
encodedParams.set('furl', 'https://akhilsteel.in/payment');
encodedParams.set('hash', zash);


const options = {
  method: 'POST',
  url: 'https://pay.easebuzz.in',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  },
  data: encodedParams,
};

 res = await axios.request(options);

 return {
           statusCode : 200 ,
           headers: {
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Credentials': true
           },
           body : JSON.stringify(res) 
         };


}


