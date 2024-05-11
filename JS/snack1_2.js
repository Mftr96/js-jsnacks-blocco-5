//snack1
//dichiaro array zucchine

let zucchine=[
    {tipo:"rossa", lunghezza_cm:11,peso:12},
    {tipo:"rossa", lunghezza_cm:12,peso:12},
    {tipo:"rossa", lunghezza_cm:13,peso:12},
    {tipo:"rossa", lunghezza_cm:14,peso:12},
    {tipo:"rossa", lunghezza_cm:15,peso:12},
    {tipo:"rossa", lunghezza_cm:16,peso:12},
    {tipo:"rossa", lunghezza_cm:17,peso:12},
    {tipo:"rossa", lunghezza_cm:18,peso:12},
    {tipo:"rossa", lunghezza_cm:19,peso:12},
    {tipo:"rossa", lunghezza_cm:20,peso:12},
];
//dichiaro la variabile in cui sommare le lunghezze 
let somma_risultato=0;
//creo un ciclo in cui sommo le lunghezze
for (let i = 0; i < zucchine.length; i++) {
    const element = zucchine[i].lunghezza_cm;
    somma_risultato+=element;
    
}
console.log(somma_risultato)
//----------------------------------------------------------------------
//snack 2
//dichiaro i due array :zucchine corte e zucchime lunghe
let zucchine_corte=[];
let zucchine_lunghe=[];
//dichiaro le somme per le due liste
let somma_corte=0;
let sommma_lunghe=0;


//creo ciclo che separa  le zucchine in due array
for (let i = 0; i < zucchine.length; i++) {
    const element = zucchine[i];
    if(element.lunghezza_cm<15){
        zucchine_corte.push(element)
    }else if(element.lunghezza_cm>15){
        zucchine_lunghe.push(element)
    }
}

//sommo il peso dei due array con due zucchine 

for (let i = 0; i < zucchine_corte.length; i++) {
    const element = zucchine_corte[i].peso;
    somma_corte+=element;
}

for (let i = 0; i < zucchine_lunghe.length; i++) {
    const element = zucchine_lunghe[i].peso;
    sommma_lunghe+=element;    
}

console.log("la somma delle corte è ",somma_corte)
console.log("la somma delle lunghe è ",somma_lunghe)

//------------------------------------------------------------


