var axios = require('axios').default;
var sha512 = require('js-sha512');
const { URLSearchParams } = require('url');


var key = process.env.KEY ;
var txnid = 'braitsch00237';
var amount = '2400' ;
var productinfo = 'appleWatch' ;
var firstname = 'sandeep' ;
var phone = '9090909090';
var email = 'mahesh@gmail.com' ;
var salt = process.env.SALT ;
var myValue = key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+phone+'|'+email+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+salt ;
var hash = sha512.sha512(myValue);


exports.handler = async function (event,res){


const encodedParams = new URLSearchParams();
encodedParams.set('key', '1VS97REYKV');
encodedParams.set('txnid', 'braitsch00237');
encodedParams.set('amount', '2400');
encodedParams.set('productinfo', 'appleWatch' );
encodedParams.set('firstname', 'sandeep');
encodedParams.set('phone', '9090909090');
encodedParams.set('email','mahesh@gmail.com');
encodedParams.set('surl', 'https://akhilsteel.in');
encodedParams.set('furl', 'https://akhilsteel.in/payment');
encodedParams.set('hash', hash );



const options = {
  method: 'POST',
  url: 'https://testpay.easebuzz.in/payment/initiateLink',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
     Accept: 'application/json'
  },
  data: encodedParams,

};

res = await axios.request(options) ;
var kaju = JSON.stringify(res.data) ;


 return {
           statusCode : 200 ,
           body :  kaju
         };


}


