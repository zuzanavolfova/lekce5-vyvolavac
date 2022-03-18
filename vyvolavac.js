let jmenaConst = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];
let jmena = [];
kopirujJmena();

let tazenaJmena = [];
let seznamVyvolanych = document.querySelector('#seznam');
let pocitadloText = document.querySelector('.pocitadlo');
let vyherce = document.querySelector('#vyherka');



function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }
    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];
    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);
    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.unshift(vyherniJmeno);

    vyherce.textContent = vyherniJmeno;

    seznamVyvolanych.textContent = tazenaJmena;

    pocitadlo()
}

function zacniZnovu() {
    pocitadloText.textContent = "Nikdo se ještě nepokusil ohromit učitele";
    seznamVyvolanych.textContent = "Seznam vyvolaných";
    vyherka.textContent = "";
    tazenaJmena.splice(0, tazenaJmena.length);
    jmena.splice(0, jmena.length);
    kopirujJmena();
}

function pocitadlo() {
    if (tazenaJmena.length === 1) {
        pocitadloText.textContent = "Jedna slečna už může v klidu odpočívat."
    } else if (tazenaJmena.length > 1 && tazenaJmena.length < 5) {
        pocitadloText.textContent = tazenaJmena.length + " slečny jsou mimo nebezpečí"
    } else if (tazenaJmena.length > 4)
        pocitadloText.textContent = tazenaJmena.length + " slečen je mimo nebezpečí"
}

function kopirujJmena() {
    // for (let i = 0; i< jmenaConst.length; i++)
    // {
    //     jmena.push(kopirujJmena[i]);
    // }
    jmena.push(...jmenaConst);
}