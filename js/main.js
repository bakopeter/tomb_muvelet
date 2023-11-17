/*
1. Hozzon létre egy 30 elemű tömböt, amelynek elemei 1 és 100 között vannak,  
és a következő feladatokat azon végezze el. 
*/
const numbers = [];
length =30;

for (let i=0; i<length; i++) {
    numbers.push(Math.floor(Math.random() * 100)+1);
}
/*
2. Jelenítse meg a console felületen az összes páros számot a tömbből. 

for (let item in numbers) {
    console.table(numbers[item]);
}
*/
console.log("A tömb páros elemei:")
numbers.forEach(element => {
    if (element % 2 == 0)
    console.log(element);
});
/*
3. Egy másik tömbbe függvény segítségével másolja át az összes páratlan számot 
és jelenítse meg a console felületen őket csillaggal elválasztva. 
*/
const oddNumbers = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

console.log("A tömb páratlan elemei:")
numbers.forEach(element => {
    if (element % 2 != 0)
    oddNumbers.push(element)
});
console.log(oddNumbers.join(" * "));
/*
4. A 3. feladatban keletkezet tömbbe az utolsó előtti helyre szúrja be a 213-as 
értéket.
*/
console.log("A 213-as szám utolsó előtti helyre való beszúrásának ellenőrzése:");
oddNumbers.splice(oddNumbers.length-1, 0, 213);
console.log(oddNumbers);