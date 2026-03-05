let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250
let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal);
let montantReduction = 0;
if (codePromo !== null && estMembre === true) {
    montantReduction = sousTotal * (reductionPourcentage / 100);
}
console.log("Montant de la réduction : " + montantReduction);
let totalFinal = sousTotal - montantReduction;
console.log("totalFinal : " + totalFinal);
let statutPaiement;
if (soldeCompte >= totalFinal) {
    statutPaiement = "Paiement accepté";
} else {
    statutPaiement = "Solde insuffisant";
}
console.log(statutPaiement);
let nouveauSolde = soldeCompte;
if (statutPaiement === "Paiement accepté") {
    nouveauSolde = soldeCompte - totalFinal;
    console.log("Nouveau solde : " + nouveauSolde);

}
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit    : " + nomProduit);
console.log("Quantité   : " + quantite);
console.log("Prix unit. : " + prix + " MAD");
console.log("Sous-total : " + sousTotal + " MAD");
console.log("Réduction  : " + montantReduction + " MAD");
console.log("Total      : " + totalFinal + " MAD");
console.log("Statut     : " + statutPaiement);
console.log("Solde      : " + nouveauSolde + " MAD");






