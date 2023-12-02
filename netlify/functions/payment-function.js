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
encodedParams.set('hash', '4d22fb6a979c63c28d3ab61aeefd7f1543a1138b4b73410c807dfe8368b3bd1653f746ad0650d3a59e2b4f7e945c1c37e4b107bee929babbc7f309d935c3a2dc' );



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


