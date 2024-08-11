import { wordlist,swaplose } from "../data/data.js" 
import { reloadPage } from "./reloadpage.js";

export function reloadLastPage(result){
    let HTMLLastPage='';
    const main=document.querySelector('main');
    if (result){
        HTMLLastPage=`<div class="game">
    <div><h2>[HANGMAN GAME]</h2></div>
    <div class="img"><img  class="img-convert" src="img-convert/${swaplose}.jpg"></div>
    <div><h2 class="js-resoult"><font color="red">You Winner</font></h2></div>
    <div><h2 class="js-addtxt"><pre>${wordlist.join('')}</pre><h2></div>
    <button class="gameBut">Restart</button>
    <script src="../script/main.js" type="module"></script>`
        
    }
    else{
        HTMLLastPage=`<div class="game">
    <div><h2>[HANGMAN GAME]</h2></div>
    <div class="img"><img src="img/${swaplose}.jpg"></div>
    <div><h2 class="js-resoult"><font color="red">You Lose</font></h2></div>
    <div><h2 class="js-addtxt"><pre>Answer:${wordlist.join('')}</pre><h2></div>
    <button class="gameBut">Restart</button>
    <script src="../script/main.js" type="module"></script>`
    }
    main.innerHTML=`${HTMLLastPage}`
    document.querySelector('.gameBut').addEventListener('click',()=>{
        reloadPage()
    })
    return 0;
}