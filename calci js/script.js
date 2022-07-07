let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

for(item of buttons){
    item.addEventListener('click', function(e){
        buttonText = e.target.innerText;
        // console.log(buttonText);
        if(buttonText == 'C'){
            screen.value = "";
        }
        else if(buttonText == '='){
            screen.value = eval(screen.value);
        }
        else{
            screen.value += buttonText;
        }
    })
}