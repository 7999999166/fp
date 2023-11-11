
var myName ={name: process.env.KANJURA}


exports.handler = async function (event){
   return {
           statusCode : 200 ,
           body : JSON.stringify(myName) 
         };
}


