//dichiaro gli array in pagina

let lista_uno=[
    1,
    2,
    3,
    4,
    5
];
let lista_due=[
    "a",
    "b",
    "c",
    "d",
    "e"
];

let lista_somma=[];
//creo ciclo per sommare i due array in fila 
for (let i = 0; i < lista_uno.length; i++) {
    const element_uno=lista_uno[i];
    lista_somma.push(element_uno)
    const element_due=lista_due[i];
    lista_somma.push(element_due);
    
}
console.log(lista_somma);