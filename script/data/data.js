import { reloadLastPage } from "../utils/reloadLastpage.js";
import { words } from "./word.js";
export let switcher='light-mode';
let numberSwitch=0;
export let swaplose=0
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let word=words[getRandomInt(words.length)]
export let wordlist=[]
let wordgame=[]
let tries=10
export const symvols=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export function addNumber(){
    numberSwitch+=1;
    console.log(numberSwitch)
    return numberSwitch;
}
export function nullElement(){
    wordgame=[]
    wordlist=[]
    swaplose=0
    tries=10
    word=words[getRandomInt(words.length)]
}
export function createWord(){
    word=word.toUpperCase()
    for (let i=0;i<word.length;i++){
        wordlist.push(word[i])
        if(word[i]===' '){
            wordgame.push('  ')
        }
        else{
            wordgame.push('_ ')
        }
    }
    console.log(wordgame.join(''))
    return wordgame
}
export function createButtonSymvols(symvol){
    let buttonHTML='';
    symvol.forEach(element => {
        buttonHTML+=`<button class="symvol js-idcode-${element}" id="${element}">${element}</button>`
    });
    return buttonHTML
}
export function reloadSwitcher(switchs){
    switcher=switchs
}
function swapIMGandTries(swaper,tries){
    const img=document.querySelector('.img')
    img.innerHTML=`<img src="img/${swaper}.jpg">`
    document.querySelector('.js-tries').innerHTML=`${tries}`

}
function checkWin(){
    let result=true;
    wordgame.forEach((element)=>{
        if (element==='_ '){
            result=false;
        }
    })
    return result;
}


export function logicGame(id){
    let answer=false;
    wordlist.forEach((element,number)=>{
        if (String(id).toLowerCase()===element.toLowerCase()){
            answer=true;
            wordgame[number]=`${element.toUpperCase()} `;
            document.querySelector('.js-addtxt').innerHTML=`<pre>${wordgame.join('')}</pre>`;
        }
    })
    swaplose+=Number(!answer)
    tries-=Number(!answer)
    if (tries===0){
        return 'Lose';
    }
    else if(checkWin()){
        return 'Win';
    }
    else{
        swapIMGandTries(swaplose,tries);
    }
    return answer;
}