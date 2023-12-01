var axios = require('axios');
var crypto = require('crypto');



var key = process.env.KEY ;
var txnid = 'braitsch00237';
var amount = '2400' ;
var productinfo = 'appleWatch' ;
var firstname = 'sandeep' ;
var phone = '9090909090';
var email = 'mahesh@gmail.com' ;
var salt = process.env.SALT ;
var myValue = key+txnid+amount+productinfo+firstname+phone+email+salt ;
var hash = crypto.createHash('sha512').update(myValue).digest('hex');



exports.handler = async function (event){

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
encodedParams.set('hash', hash);


const options = {
  method: 'POST',
  url: 'https://pay.easebuzz.in',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  },
  data: encodedParams,
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}

 return {
           statusCode : 200 ,
           body : JSON.stringify(data) 
         };


}


