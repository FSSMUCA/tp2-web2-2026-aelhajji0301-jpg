
let a =[0 , 1, "" ,"0" ,null,undefined,NaN,false,[],{}];
for(let i=0 ; i<a.length;i++){
    let valeur = a[i];
    let type = a ? "truthy" : "falsy";


    console.log(String(valeur) + "->"+type);
}

