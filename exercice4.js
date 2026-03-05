
console.log(  0 == "" , 0 === "");
console.log(0 == "0" , 0 === "0");
console.log(0 == false , 0 === false);
console.log("" == false , "" === false);
console.log(null == undefined , null === undefined);
console.log(null == false , null === false);
console.log(NaN == NaN , NaN === NaN);
console.log(1 == "1" , 1 === "1");
console.log(" \t\n " == 0 , " \t\n " === 0);
//vjnverinfecc3
let a = [0 , NaN , Infinity , -Infinity , 42 , 3.14, Number.MAX_SAFE_INTEGER + 1 , -0];
a = 0 ;
b = NaN;
c = Infinity;
d = -Infinity;
e = 42;
f = 3.14;
g = Number.MAX_SAFE_INTEGER+1;
h = -0 ;
console.log( a + "->"+ "ENTIER SUR" );
console.log(b + "->" + "InvaLIDE" );
console.log(c + "" + "INFINI");
console.log(d + "" + "INFINI");
console.log(e + "->" + "ENTIER SUR");
console.log(f + "->" + "DECIMAL");
console.log(g + "->" + "ENTIER HORS LIMITES");
console.log(h+ "->" + "ZERO NEGATIF");