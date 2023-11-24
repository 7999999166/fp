<script>
    var aa ;
    var bb ;
    var cc ;
    var dd ;
    var ee ;


    async function maru(){
   axios({
      method:"post",
      url:"https://starlightsteel.in/api/auth/local/register",
      data:{
              email: bb,
              password: ee,
              username: aa,
              phoneNo:cc,
              DeliveryAddress:dd

           }
      })
   } 
  
</script>

<div>
   <section class="py-4 py-xl-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Sign Up</h2>
                <p>Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-6 col-xl-4">
                <div class="card mb-5">
                    <div class="card-body d-flex flex-column align-items-center">
                        <div class="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4"><svg class="bi bi-person" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                            </svg></div>
                        <div>
                            <div class="mb-3"><input bind:value={aa} class="form-control" type="text"  placeholder="username" /></div>
                            <div class="mb-3"><input bind:value={bb} class="form-control" type="email" placeholder="Email" /></div>
                            <div class="mb-3"><input bind:value={cc} class="form-control" type="number" placeholder="Phone Number" /></div>
                            <div class="mb-3"><input bind:value={dd} class="form-control" type="text" placeholder="Delivery Address" /></div>
                            <div class="mb-3"><input bind:value={ee} class="form-control" type="password" placeholder="set Password" /></div>
                            <div class="mb-3"><button on:click={maru} class="btn btn-primary d-block w-100" type="submit">Sign Up</button></div>
                            <a href="/login.html">Already a Memeber ?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>

<style>
   a{
    text-decoration: none;
  }  
</style>