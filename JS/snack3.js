//dichiaro la parola

let parola=prompt("inserisci parola");

//dichiro array in cui salvare la parola girata e parola normale

let lettere_parola=[];
let lettere_girate=[];


//creo ciclo in cui metto sia la parola normale che rigirata 
//scrivo la funzione che accetta un argomento 
function f_parola(){
    for (let i = 0; i < parola.length; i++) {
        const element = parola[i];
        const girato=parola[parola.length -1 -i]
        lettere_parola.push(element)
        lettere_girate.push(girato)   
    }
    
}

f_parola();
console.log(lettere_parola);
console.log(lettere_girate)