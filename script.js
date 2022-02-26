
 var input = document.querySelector('input');
 var result = document.querySelector('div p');

function getResult(){
   
    var characterCount = input.value.split(' ').join('').length
    var wordsCount = input.value.split(' ').length;

   result.innerText = ` You've entered ${characterCount} characters and ${wordsCount} words`; 
   if(result.innerText === '' ){
        result.innerText = "You'll see your text count here!"
    } else if( wordsCount === 1 & characterCount === 0){
        result.innerText = "You'll see your text count here!"
    }
}

input.addEventListener('keyup', ()=>{
    if(result.innerText === '' ){
        result.innerText = "You'll see your text count here!"
    }
    else if( wordsCount === 1 & characterCount === 0){
        result.innerText = "You'll see your text count here!"
    }
})


