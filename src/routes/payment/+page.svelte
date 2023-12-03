<script>

     


     async function myMtain () {

      var easebuzzCheckout = new EasebuzzCheckout( '1VS97REYKV', 'prod' )

       var options = {
           access_key: '34aeb6887c66ed5968d5d92334cad7c5534b8b75636134f31e384fd5d2a77352', // access key received via Initiate Payment
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