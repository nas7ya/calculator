console.log('test');
let display = document.getElementsByClassName('display')[0];
let button = document.getElementsByClassName('buttons');

console.log(display);
console.log(display);

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map (button =>{
    button.addEventListener('click' , (e) =>{
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  });
});


buttons.map(button => {
    button.addEventListener('click' , (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error"
            }
              break;
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
            break;
        default:
            display.innerText += e.target.innerText;
        }
    });
});