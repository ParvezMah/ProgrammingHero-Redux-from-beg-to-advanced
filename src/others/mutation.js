import {produce} from "immer"
let demonSlayers = [
    "Tanjiro", 
    "Nezuko", 
    "Zenitsu", 
    "Inosuke", 
    "Giyu", 
    "Shinobu"
];


const nextState = produce(demonSlayers, draft => {
    draft.push("Kanao");
});

console.log(demonSlayers)
console.log(nextState)