let jmena = [
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

let tazenaJmena = [];

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

    let vyherce = document.querySelector('#vyherka');
    vyherce.textContent = vyherniJmeno;

    let seznamVyvolanych = document.querySelector('#seznam');
    seznamVyvolanych.textContent = tazenaJmena;


    function pocitadlo() {
        let pocitadlo = document.querySelector('.pocitadlo');
        if (tazenaJmena.length === 1) {
            pocitadlo.textContent = "Jedna slečna už může v klidu odpočívat."
        } else if (tazenaJmena.length > 1 && tazenaJmena.length < 5) {
            pocitadlo.textContent = tazenaJmena.length + " slečny jsou mimo nebezpečí"
        } else if (tazenaJmena.length > 4)
            pocitadlo.textContent = tazenaJmena.length + " slečen je mimo nebezpečí"
    }
    pocitadlo()

}