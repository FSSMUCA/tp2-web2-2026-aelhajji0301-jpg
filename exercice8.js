
let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";


let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}


let ageCorrige = parseInt(age);
let ageRapport = (isNaN(ageCorrige) || ageCorrige <= 0) ? "valeur invalide" : ageCorrige;


let indexArobase = email.indexOf("@");
let emailValide = (indexArobase !== -1 && email.indexOf(".", indexArobase) !== -1);
let emailRapport = emailValide ? "Valide" : "invalide";

let scoreCorrige = parseInt(scoreJeu);
if (isNaN(scoreCorrige)) {
    scoreCorrige = 0;
}


let estAdminBool = (estAdmin === "true");


let derniereConnexionRapport = derniereConnexion ?? "Jamais connecté";


let nbConnexionsNum = Number(nombreConnexions);
let nbConnexionsRapport = (nbConnexionsNum === 0) ? "Aucune connexion" : nbConnexionsNum;


console.log("--- RAPPORT D'ANALYSE ---");
console.log("Nom :", nomCorrige);
console.log("Age :", ageRapport);
console.log("Email :", emailRapport);
console.log("Score :", scoreCorrige);
console.log("Admin :", estAdminBool);
console.log("Dernière connexion :", derniereConnexionRapport);
console.log("Nombre de connexions :", nbConnexionsRapport);