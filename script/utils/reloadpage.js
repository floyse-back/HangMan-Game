import { addNumber,switcher,createWord, symvols, createButtonSymvols,reloadSwitcher  } from "../data/data.js";

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
    <div><img src="" alt=""></div>
    <div><h2 class="js-addtxt">_ _ _ _ _</h2></div>
    <div><h2>TRIES LEFT</h2></div>
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
    })
}
