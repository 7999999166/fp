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
encodedParams.set('hash', 'ea8e3374b6c1b07bb9521c08393eaffd1655bc983b49a44f007d52bdf3e1c0800e86b289c0b7c806c78b8802dd1465777ca44e116edb42bf690a9ec4e98c6e8c' );



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
           body : mydata
         };


}


