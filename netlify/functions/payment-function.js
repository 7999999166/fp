var axios = require('axios').default;
const { URLSearchParams } = require('url');
var crypto = require('crypto') ;


var key = process.env.KEY ;
var txnid = 'brai3455670237';
var amount = 2400.25 ;
var productinfo = 'appleWatch' ;
var firstname = 'sandeep' ;
var phone = 9090909090;
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


var myValue = key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+email+'|'+udf1+'|'+udf2+'|'+udf3+'|'+udf4+'|'+udf5+'|'+udf6+'|'+udf7+'|'+udf8+'|'+udf9+'|'+udf10+'|'+salt ;
var hashString = crypto.createHash('sha512').update(myValue).digest('hex');


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
encodedParams.set('hash', hashString );


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
  val1:hashString,
  val3:myValue
}

var mydata = JSON.stringify(myData);


 return {
           statusCode : 200 ,
           body : myToken
         };


}


