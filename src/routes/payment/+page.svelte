<script>

     


     async function myMtain () {
      
      var easebuzzCheckout = new EasebuzzCheckout( '1VS97REYKV', 'prod' )

       var options = {
           access_key: 'fd55c8d87b0d147b40542b59ff8c55b0d3c263497a3cdce795bf0238f7e3bc54', // access key received via Initiate Payment
           onResponse: (response) => {
               console.log(response);
           },
           theme: "#123456" // color hex
       }
       easebuzzCheckout.initiatePayment(options);

           }
  
      
   
   
  
</script>

<div>
   <h1>Hello Payment</h1>
   <button  class="btn btn-warning" on:click={myMtain}>EaseBuzz-Checking</button>
</div>

<style>
   
</style>