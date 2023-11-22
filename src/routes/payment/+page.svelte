<script>
    async function aaa(){var xxx = new Promise (async function(resolve){var zash = await axios.get('https://akhilsteel.in/.netlify/functions/hello-world') ;  resolve(zash); }); return xxx ;}
    async function myMtain(){var hash = await aaa() ;
                             console.log(hash);}


  
</script>

<div>
   <h1>Hello Payment</h1>
   <button class="btn btn-warning" on:click={myMtain}>EaseBuzz-Checking</button>
</div>

<style>
   
</style>