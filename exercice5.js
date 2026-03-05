let a = [0 , NaN , Infinity , -Infinity , 42 , 3.14, Number.MAX_SAFE_INTEGER + 1 , -0];
a = 0 ;
console.log( a + "->"+ "ENTIER SUR" );
a = NaN;
console.log(a + "->" + "InvaLIDE" );
c = Infinity;
console.log(c + "->" + "INFINI");
d = -Infinity;
console.log(d + "->" + "INFINI");
e = 42;
console.log(e + "->" + "ENTIER SUR");
f = 3.14;
console.log(f + "->" + "DECIMAL");
g = Number.MAX_SAFE_INTEGER+1;
console.log(g + "->" + "ENTIER HORS LIMITES");
h = -0 ;
console.log(h+ "->" + "ZERO NEGATIF");




