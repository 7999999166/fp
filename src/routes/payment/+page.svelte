<script>

     


     async function myMtain () {

       var easebuzzCheckout = new EasebuzzCheckout( '1VS97REYKV', 'prod' )
       var options = {
           access_key: '2aee2811275c387d9f32963a84159eb8fd50b7a71520871291345f7488777596', // access key received via Initiate Payment
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