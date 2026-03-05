let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

const x = "valeur par défaut" ;

console.log(" -----------------Partie A ---------------------");
console.log(`nom : ${nom ?? x}`);
console.log(`age : ${age ?? x}`);
console.log(`ville : ${ville ?? x}`);
console.log(`score : ${score ?? x}`);
console.log(`actif : ${actif ?? x}`);


console.log("----------------Partie B--------------------------");
console.log(`nom : ${nom || x}`);
console.log(`age : ${age || x}`);
console.log(`ville : ${ville || x}`);
console.log(`score : ${score || x}`);
console.log(`actif : ${actif || x}`);
console.log("---------------------Partie C----------------------");
console.log("nom   : " + ((nom ?? x) === (nom || x) ? "même résultat" : "résultat différent"));
console.log("age   : " + ((age ?? x) === (age || x) ? "résultat différent" : "même résultat"));
console.log("ville : " + ((ville ?? x) === (ville || x) ? "même résultat" : "résultat différent"));
console.log("score : " + ((score ?? x) === (score || x) ? "même résultat" : "résultat différent"));
console.log("actif : " + ((actif ?? x) === (actif || x) ? "même résultat" : "résultat différent"));



