var bill = Number(prompt("How much was your meal?"));
var service = prompt("Was your service good, fair, or bad?");
function totalAmount (bill, service) {
    if (service == "good") {
        console.log(bill + (bill * .20));
    }
    else if (service == "fair") {
        console.log(bill + (bill * .15));
    }
    else if (service == "bad") {
        console.log(bill + (bill * .10));
    }
}
totalAmount(bill, service);