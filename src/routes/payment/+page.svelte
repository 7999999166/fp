<script>
    async function aaa(){var xxx = new Promise (async function(resolve){var zash = await axios.get('https://akhilsteel.in/.netlify/functions/hello-world') ;  resolve(zash); }); return xxx ;}
    async function myMtain(){var hash = await aaa() ;
                             var mash = hash.data ;
                             console.log(mash);
                             
                             const encodedParams = new URLSearchParams();
                              encodedParams.set('key', '2PBP7IABZ2');
                              encodedParams.set('txnid', 'braitsch00237');
                              encodedParams.set('amount', '2400');
                              encodedParams.set('productinfo', 'appleWatch');
                              encodedParams.set('firstname', 'sandeep');
                              encodedParams.set('phone', '9090909090');
                              encodedParams.set('email', 'mahesh@gmail.com');
                              encodedParams.set('surl', 'https://akhilsteel.in');
                              encodedParams.set('furl', 'https://starlightsteel.in');
                              encodedParams.set('hash', mash);                             

const options = {
  method: 'POST',
  url: 'https://pay.easebuzz.in',
  headers: {
    'Access-Control-Allow-Origin': '*'          ,
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


                             
                                 }


  
</script>

<div>
   <h1>Hello Payment</h1>
   <button class="btn btn-warning" on:click={myMtain}>EaseBuzz-Checking</button>
</div>

<style>
   
</style>