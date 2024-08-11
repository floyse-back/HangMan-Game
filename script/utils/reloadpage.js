import {nullElement, switcher,createWord, symvols, createButtonSymvols,reloadSwitcher,logicGame  } from "../data/data.js";
import { reloadLastPage } from "./reloadLastpage.js";
export function styleReload(num) {
    const style = document.querySelector('body');
    if (num % 2 === 0) {
        console.log('light')
        if (style.classList.contains('dark-mode') === true) {
            style.classList.remove('dark-mode');
        }
        style.classList.add('light-mode');
        return 'light-mode'

    }
    else {
        console.log('DARK')
        if (style.classList.contains('light-mode') === true) {
            style.classList.remove('light-mode');
        }
        style.classList.add('dark-mode');
        return 'dark-mode'
    }
}


export function reloadPage() {
    nullElement()
    const mainHTML = document.querySelector('main')
    mainHTML.innerHTML = `
    <div class="game-start">
        <div><h2 class="text">[ HANGMAN GAME ]</h2></div>
        <button class="gameBut"><p>Start Game</p></button>
    </div>
    
    `
    document.querySelector('body').classList.add(`${switcher}`)
    document.querySelector('.gameBut').addEventListener('click', () => {
        let HTMLcreate = `
    <div class="game">
    <div><h2>[HANGMAN GAME]</h2></div>
    <div class="img"><img src="img/0.jpg"></div>
    <div><h2 class="js-addtxt"><pre>${createWord().join('')}</pre><h2></div>
    <div><h3>TRIES LEFT <font color="red" class='js-tries'>10</font></h3></div>
    <div class="container">
        ${createButtonSymvols(symvols)}
    </div>
    <div class="quit"><button class='js-quit'>Quit</button></div>
    </div>
    <script src="../script/main.js" type="module"></script>`
        document.querySelector('main').innerHTML = HTMLcreate
        document.querySelector('.js-quit').addEventListener('click', () => {
            reloadPage()
        })
        document.querySelectorAll('.symvol').forEach((element)=>{
            element.addEventListener('click',()=>{
                const id=element.id;
                const but=document.getElementById(`${id}`);
                but.disabled =true;
                let t=logicGame(id);
                if(t==='Lose'){
                    let resoult=reloadLastPage(false);
                }
                else if(t==='Win'){
                    let resoult=reloadLastPage(true);
                }
                else if(t===true){
                    but.style.backgroundColor='rgb(27, 179, 27)'
                }
                else{
                    but.style.backgroundColor='rgb(104, 111, 117)'
                }
            })

        })
    })
}
