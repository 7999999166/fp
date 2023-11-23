<script>

    import {db} from '../../db.js';
    import {orderTotal} from "../../store.js";
    import {cartQtyTotal} from "../../store2.js";

    async function addToOrder(e){
        var jj = eval(e.target.getAttribute("data-amount")) ;
        var bj = e.target.getAttribute("data-name");
        var kl = 1 ;
        
        
        
        await db.order.add({
		   Productname: bj,
		   Count: kl ,
           Price:jj 
	
	});
    addToTotal();
    addToCartQty();
    }

    async function addToTotal(){const orders = await db.order.toArray() ; console.log(orders) ;
     $orderTotal = orders.reduce(function(rtotal,item){return rtotal + item.Price },0); console.log($orderTotal) ;}

     async function addToCartQty(){const orders = await db.order.toArray() ; 
     $cartQtyTotal = orders.reduce(function(rtotal,item){return rtotal + item.Count },0);}
  
</script>

<div>
    <div class="container py-4 py-xl-5">
    <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Product Catagories</h2>
            <p>We Offer Best Product at Best Price</p>
        </div>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="PedalBin.jpg" />
                <div class="py-4">
                    <a style="pointer-events: none; cursor: default;" href="/dustbins"><h4>Dustbins</h4></a>
                    <h6 class="huy">Price -2400 </h6>
                    <p>Dustbins are generally used to dispose of unwanted materials like waste paper, food scraps, and other forms of garbage. They come in a variety of sizes, materials, and styles, and are used in both indoor and outdoor settings.</p>
                    <button class="btn btn-primary" data-amount=2400 data-name="dustbin"  on:click={addToOrder}>add to cart</button>
                </div>
            </div>
        </div>
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="Dabba.jpg" />
                <div class="py-4">
                   <a style="pointer-events: none; cursor: default;" href="/containers"><h4>Containers</h4></a>
                   <h6 class="huy">Price -2700 </h6> 
                    <p>
Containers are generally used to store and transport goods. They come in a variety of sizes, shapes, and materials, and are used in a variety of industries.</p>
                    <button class="btn btn-primary" data-amount=2700 data-name="Container" on:click={addToOrder}> add to cart</button>
                </div>
            </div>
        </div>
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="planter.jpg" />
                <div class="py-4">
                    <a style="pointer-events: none; cursor: default;" href="/planters"><h4>Planters</h4></a>
                    <h6 class="huy">Price -2600 </h6>
                    <p>Planters are containers used to grow plants. They are made from a variety of materials, including plastic, metal, wood, and ceramic. Planters come in a variety of sizes and shapes to accommodate different types of plants. They can be placed indoors or outdoors.</p>
                    <button class="btn btn-primary" data-amount=2600 data-name="Planter" on:click={addToOrder}>add to cart</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <!-- <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div class="py-4">
                    <a href="/buckets"><h4>Buckets</h4></a>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div class="py-4">
                    <a href="/insulatedContainers"><h4>Insulated Containers</h4></a>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div class="py-4">
                   <a href="/airCooler"><h4>Air Coolers</h4></a> 
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div class="py-4">
                   <a href="/mistFan"><h4>Mist Fans </h4></a> 
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div class="py-4">
                    <a href="/commercialCookware"><h4>Commercial Cookware</h4></a>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div><img class="rounded img-fluid d-block w-100 fit-cover" style="height: 200px;" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                <div class="py-4">
                    <a href="/domesticCookware"><h4>Domestic Cookware</h4></a>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                </div>
            </div>
        </div> -->
    </div>
</div>
</div>
  

<style>
  h4{
    font-weight: bold;
  } 
  h2{
    font-weight: bold;
  }
  a{
    text-decoration: none;
  }
  a:hover{
    color: green;
  }
  .huy{
    color: red;
    font-weight: bold;
  }
</style>