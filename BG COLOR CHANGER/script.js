const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(  function(button){
    button.addEventListener('click', (e)=>{
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = "#896978";
                break;
            case 'white':
                body.style.backgroundColor = "#839791";
                break;
            case 'blue':
                body.style.backgroundColor = "#AAC0AF";
                break;
            case 'yellow':
                body.style.backgroundColor = "#FFD4CA";
                break;
            default:
                body.style.backgroundColor = '#000000';
        }
    })
}  )