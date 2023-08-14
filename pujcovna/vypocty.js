let cenaCelkem = 0;
function vypocet() {
    let horskeKolo = document.getElementById("horskeKolo").value
    if (document.getElementById("horskeKolo").disabled) {
        horskeKolo = 0;
    } 
    let detskeKolo = document.getElementById("detskeKolo").value;
    if (document.getElementById("detskeKolo").disabled) {
        detskeKolo = 0;
    }
    let silnicniKolo = document.getElementById("silnicniKolo").value;
    if (document.getElementById("silnicniKolo").disabled) {
        silnicniKolo = 0;
    }
    let gravel = document.getElementById("gravel").value;
    if (document.getElementById("gravel").disabled) {
        gravel = 0;
    }
    let pocetDnu = document.getElementById("pocetDnu").value
    if (pocetDnu == "5dni") {
        pocetDnu = 5;
    } else if (pocetDnu == "tyden") {
        pocetDnu = 7;
    } else if (pocetDnu == "14dni") {
        pocetDnu = 14;
    } else {
        pocetDnu = 30;
    };
    let cena = (horskeKolo * 500) + (detskeKolo * 200) + (silnicniKolo * 1500) + (gravel * 2500);
    cenaCelkem = cena * pocetDnu;
    if (document.getElementById("nosicStresni").checked) {
        cenaCelkem = parseInt(cenaCelkem * 1.05);
    } else if (document.getElementById("nosicTazny").checked) {
        cenaCelkem = parseInt(cenaCelkem * 1.1);
    } else {
        cenaCelkem = cenaCelkem;
    };
    document.getElementById("cenaCelkem").innerHTML = "Cena za půjčení kol je: " + (cenaCelkem) + " Kč";
};

function srovnejRozpocetCena() {
    let rozpocet = parseInt(document.getElementById("rozpocet").value);
    if (rozpocet < cenaCelkem && rozpocet > 0) {
        document.getElementById("srovnani").innerHTML = "Váš rozpočet je nižší než cena za půjčení vybraných kol.";
    } else if (rozpocet > cenaCelkem) {
        document.getElementById("srovnani").innerHTML = "Váš rozpočet je vyšší než cena za půjčení vybraných kol.";
    } else if (rozpocet == "" || rozpocet == null || rozpocet == undefined || isNaN(rozpocet) || rozpocet == 0){
        document.getElementById("srovnani").innerHTML = "Nezadali jste rozpočet.";
    } else if (rozpocet > 0 || rozpocet== cenaCelkem){
        document.getElementById("srovnani").innerHTML = "Váš rozpočet je stejný jako cena za půjčení vybraných kol.";
    }
};

function kontrola(email) {
    if (email.indexOf("@") < 1 || email.indexOf(" ") > -1 || email.indexOf(".cz") < 3) {
        alert("Chybný e-mail - doplňte správný e-mail");
        pokracuj = false;
    }
    else pokracuj = true;
}