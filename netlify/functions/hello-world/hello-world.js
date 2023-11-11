// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = 
async function (){
  return {
           statusCode : 200 ,
           body : "kanik is Great "
         };
}

module.exports = { handler }
