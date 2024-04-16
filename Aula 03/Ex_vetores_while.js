let frutas = ["Maçã", "Banana", "Pera"];
const n = frutas.length;
 
for (let i = 0; i < n; i++) {
    console.log("Fruta #" + (i+1) + ": " + frutas[i]);
}
 
for (let i = 0; i < n; i++) {
    console.log(`Fruta # (${i+1}) : ${frutas[i]}`);
}
 
let k = 0;
while(k<n){
    console.log(`Fruta # (${k+1}) : ${frutas[k]}`);
    k++;
}