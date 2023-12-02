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
encodedParams.set('key', process.env.KEY);
encodedParams.set('txnid', 'braitsch00237');
encodedParams.set('amount', '2400');
encodedParams.set('productinfo', 'appleWatch' );
encodedParams.set('firstname', 'sandeep');
encodedParams.set('phone', '9090909090');
encodedParams.set('email','mahesh@gmail.com');
encodedParams.set('surl', 'https://akhilsteel.in');
encodedParams.set('furl', 'https://akhilsteel.in/payment');
encodedParams.set('hash', '17bbb3dc603f6b26295853c354030fd4ee5f2bb08796cd332521165e8dde76fd0ad80c80290be14371830c56ca0ea1d4194263c16b1da0a5ed03d6b3d54e61a7');



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


 return {
           statusCode : 200 ,
           body :  res.data
         };


}


