let switcher='style/DarkMode.css'
let numberSwitch=0


function styleReload(num){
    const style =document.querySelector('body');
    console.log(style)
    console.log(style.classList.contains('light-mode'))
    if (num%2===0){
        console.log('light')
        if (style.classList.contains('dark-mode')===true){
            style.classList.remove('dark-mode');
        }
        style.classList.add('light-mode');

    }
    else{
        console.log('DARK')
        if (style.classList.contains('light-mode')===true){
            style.classList.remove('light-mode');
        }
        style.classList.add('dark-mode');
    }
}


document.querySelector('span').addEventListener('click',(event)=>{
    numberSwitch++;
    styleReload(numberSwitch);
})