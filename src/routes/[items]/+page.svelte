<script>
  import myData from '$lib/data.json' ;
  import {page} from '$app/stores';
  var myProducts = [] ;
  var items = $page.params.items ;
  


  if (items == 'dustbins'){ myProducts = myData.dustbins ; }
  if (items == 'containers'){ myProducts = myData.containers ; }
  if (items == 'planters'){ myProducts = myData.planters ; }
  if (items == 'buckets'){ myProducts = myData.buckets ; }
  if (items == 'mistFan'){ myProducts = myData.mistFan ; items = "Mist Fan" }
  if (items == 'insulatedContainers'){ myProducts = myData.insulatedContainers ; items = 'Insulated Containers' ;}
  if (items == 'commercialCookware'){ myProducts = myData.commercialCookware ;  items = "Commercial Cookware"}
  if (items == 'comesticCookware'){ myProducts = myData.domesticCookware ;  items = "Domestic Cookware"}
  if (items == 'airCooler'){ myProducts = myData.airCooler ;  items = "Air Cooler"}
   


</script>

<div>

    <div class="container">
        <nav aria-label="breadcrumb">
  <ol class="breadcrumb  jik">
    <li class="breadcrumb-item"><a href="/products">Products</a></li>
    <li class="breadcrumb-item"><a href="">{items}</a></li>
  </ol>
</nav>


    </div>



    <div class="container py-4 py-xl-5 maika">
    <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2>{items.toUpperCase()}</h2>
            <p>Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
        </div>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-md-2">
        {#each myProducts as item}
        <div class="col">
            <div class="d-flex flex-column flex-lg-row">
                <div class="w-100"><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" /></div>
                <div class="py-4 py-lg-0 px-lg-4">
                    <a href="productInfo/{item.UrlName}"><h4>{item.ProductName}</h4></a>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
        </div>
        {/each}
    </div>
</div>
 
</div>

<style>

     h2{
    font-weight: bold;
  } 
  h4{
    font-weight: bold;
  }
  .maika{
    min-height: 75vh;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    color: green;
  }
  .jik{
    margin-top: 8%;
    color: blue;
  }
   
</style>