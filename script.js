let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '*'){
            string = string + "*";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '/'){
            string = string + "/";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = string + "/100";
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML == '+ / -'){
            string = string + "*-1";
            document.querySelector('input').value = string
        }
      
        else{ console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }
       
    })
})
