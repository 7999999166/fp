var axios = require('axios').default;
const { URLSearchParams } = require('url');
var crypto = require('crypto') ;


var key = process.env.KEY ;
var txnid = 'braitsch00237';
var amount = 2400.0 ;
var productinfo = 'appleWatch' ;
var firstname = 'sandeep' ;
var phone = '9090909090';
var email = 'mahesh@gmail.com' ;
var salt = process.env.SALT ;
var myValue = key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+phone+'|'+email+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+'|'+salt ;
var hash = crypto.createHash('sha512').update(myValue).digest('hex');


exports.handler = async function (event,res){


const encodedParams = new URLSearchParams();
encodedParams.set('key', key);
encodedParams.set('txnid', txnid);
encodedParams.set('amount', amount);
encodedParams.set('productinfo', productinfo );
encodedParams.set('firstname', firstname);
encodedParams.set('phone', phone);
encodedParams.set('email',email);
encodedParams.set('surl', 'https://akhilsteel.in');
encodedParams.set('furl', 'https://akhilsteel.in/payment');
encodedParams.set('hash', 'c86e03a5f14c11ef43ebf422a631106c727b66abda0acd121ecc14df8be4819c876f13bfe407ca4d6085dae94c363c04021df094e6c5bb97497b28c07871a163' );



const options = {
  method: 'POST',
  url: 'https://pay.easebuzz.in/payment/initiateLink',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
     Accept: 'application/json'
  },
  data: encodedParams,

};

res = await axios.request(options) ;
var myToken = JSON.stringify(res.data) ;

var myData = {
  val1:hash,
  val3:myValue
}

var mydata = JSON.stringify(myData);


 return {
           statusCode : 200 ,
           body : myToken
         };


}


