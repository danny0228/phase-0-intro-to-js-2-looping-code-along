// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const myGifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(myGifts);*/

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
}

const names = ["Guadalupe", "Ollie", "Aki"];
const eventName = "for the wonderful surprise gift!"

function writeCards(myArray, event) {
    const msgArray = [];
    const thankYou = "Thank you";

    for (let i = 0; i < myArray.length; i++) {
        const msg = `${thankYou}, ${names[i]}, ${eventName}`;
        msgArray.push(msg);

    }

    return msgArray;
}

writeCards(names, eventName);

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1
    }
}

countDown(10);

