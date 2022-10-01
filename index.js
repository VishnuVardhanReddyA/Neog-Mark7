const input=document.querySelector('#input')
const output=document.querySelector('.translated-text')
const btn=document.querySelector('#btn-translate')
var url="https://api.funtranslations.com/translate/pirate.json"
console.log(input)
function errorHandler(error)
{   
    //If server has any problem
    console.log(error)
    alert('Something is wrong with the server try after some time...');
}
btn.addEventListener('click',()=>{
    var finalurl=url+"?text="+input.value
    console.log(finalurl)
    fetch(finalurl)
    .then(r=>r.json()).then(j=>{
    console.log(j)
    console.log(j.contents.translated)
    output.innerText=j.contents.translated
    }).catch(errorHandler)
})