//ask for user distance to travel in km
const distanceTravel = Number(prompt("Quanti km devi percorrere?"));
//ask for user age
const userAge = Number(prompt("Quanti anni hai?"));
//set ticket price by distance
const sum = (0.21 * distanceTravel);
//then consider price by 20% discount if user age < 18, 40% discount if user age >= 65 and print on document
let amount;
if (userAge < 18) {
    amount = sum - (sum * 0.2);
    document.getElementById("price").innerHTML = `${amount.toFixed(2)} €`;
} else if (userAge >= 65) {
    amount = sum - (sum * 0.4);
    document.getElementById("price").innerHTML = `${amount.toFixed(2)} €`;
} else {
    document.getElementById("price").innerHTML = `${sum.toFixed(2)} €`;
}
document.getElementById("user").innerHTML = `${"questo è il prezzo del tuo biglietto:"}`;