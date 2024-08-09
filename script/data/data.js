export let switcher='light-mode';
let numberSwitch=0;
let word='Hello'
const wordlist=[]
const wordgame=[]
export const symvols=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


export function addNumber(){
    numberSwitch+=1;
    console.log(numberSwitch)
    return numberSwitch;
}

export function createWord(){
    for (let i=0;i<word.length;i++){
        wordlist.push(word[i])
        wordgame.push('_ ')
    }
    return wordlist,wordgame
}
export function createButtonSymvols(symvol){
    let buttonHTML='';
    symvol.forEach(element => {
        buttonHTML+=`<button class="symvol">${element}</button>`
    });
    return buttonHTML
}
export function reloadSwitcher(switchs){
    switcher=switchs
}