const DATA_WAKACJI = new Date(2027, 5, 26

);

/*
* nazwa funkcji: dopiszZero
* opis: 
* parametry: 
* zwracany typ i opis: 
* autor: Aleksander Krzyczkowski
*/

function dopiszZero(liczba) {
    if (liczba < 10) {
        return "0" + x;
    }
    return String(liczba);
}

/*
* nazwa funkcji: pokazZegar
* opis: pokazuje zegar na stronie
* parametry: 
* zwracany typ i opis: 
* autor: Aleksander Krzyczkowski
*/

function pokazZegar() {
    const teraz = new Date();
    const godziny = dopiszZero(teraz.getHours());
    const minuty = dopiszZero(teraz.getMinutes());
    const sekundy = dopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = godziny + ":" + minuty + ":" + sekundy;
}

/*
* nazwa funkcji: pokazDate
* opis: pokazuje data na stronie
* parametry: 
* zwracany typ i opis: 
* autor: Aleksander Krzyczkowski
*/

function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
}

/*
* nazwa funkcji: ileDniDo
* opis: pokazuje ile dni jest do wakacji
* parametry: 
* zwracany typ i opis: 
* autor: Aleksander Krzyczkowski
*/

function ileDniDo(dataOd, dataDo) {
    MS_W_DNIU = 1000 * 60 * 60 * 24
    const roznicaMs = dataDo - dataOd;
    return Math.ceil(roznicaMs / MS_W_DNIU);
}

/*
* nazwa funkcji: pokazDni
* opis: pokazuje dni na stronie
* parametry: 
* zwracany typ i opis: 
* autor: Aleksander Krzyczkowski
*/

function pokazDni() {
    document.getElementById("dni").textContent = ileDniDo(new Date(), d);
}

/*
* nazwa funkcji: pokazDzien
* opis: pokazuje dzien na stronie
* parametry: 
* zwracany typ i opis: 
* autor: Aleksander Krzyczkowski
*/

function pokazDzien() {
    const teraz = new Date();
    document.getElementById("dzien").textContent = teraz.toLocaleDateString("pl-PL",{weekday: "long" });
}

pokazDate();
pokazZegar();
pokazDni();
pokazDzien();   
setInterval(pokazZegar, 1000);

/*
* nazwa funkcji: 
* opis: 
* parametry: 
* zwracany typ i opis: 
* autor: Aleksander Krzyczkowski
*/