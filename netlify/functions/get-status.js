var axios = require('axios').default;
const { URLSearchParams } = require('url');
var crypto = require('crypto') ;


var key = process.env.KEY ;
var txnid = 'br09wdw455670237';
var amount = 11.25 ;
var productinfo = 'appleWatch' ;
var firstname = 'sandeep' ;
var email = 'mahesh@gmail.com' ;
var salt = process.env.SALT ;
var udf1 ='' ;
var udf2 ='' ;
var udf3 ='' ;
var udf4 ='' ;
var udf5 ='' ;
var udf6 ='' ;
var udf7 ='' ;
var udf8 ='' ;
var udf9 ='' ;
var udf10 ='' ;
var phone = '9090909090';


var myValue = key+'|'+txnid+'|'+amount+'|'+email+'|'+phone+'|'+salt ;
var hashString = crypto.createHash('sha512').update(myValue).digest('hex');


exports.handler = async function (event,res){


const encodedParams = new URLSearchParams();
encodedParams.set('txnid', txnid);
encodedParams.set('key', key);
encodedParams.set('amount', amount);
encodedParams.set('email', email);
encodedParams.set('phone', phone);
encodedParams.set('hash', hashString);

const options = {
  method: 'POST',
  url: 'https://dashboard.easebuzz.in/transaction/v1/retrieve',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  },
  data: encodedParams,
};


res = await axios.request(options) ;
var myStatus = JSON.stringify(res.data) ;


 return {
           statusCode : 200 ,
           body : myStatus

         };


}
