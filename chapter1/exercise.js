var Bank_money;
const phone_price = 99;
const Tax = 0.08;
var total_pp = 0;		//total phone price
var total_pp_c =  0; 		//total phones bought
var accessory_threshold;
var total_acc_p = 0;		//total accessory price
var total_acc_c = 0;		//total accessory count
const accessory = 10;   //accessory price
Bank_money = prompt ("how much is your bank money?");
accessory_threshold =  prompt("how much can you spend on accesories?");
while ( Bank_money >= phone_price) {
	Bank_money -= phone_price;
	total_pp += phone_price;
	total_pp_c += 1;
}
while (accessory_threshold >= accessory ) {
	accessory_threshold -= accessory;
	total_acc_p += accessory;
	total_acc_c += 1;
}
total_pp = addTax(total_pp);
console.log("you can buy " + total_pp_c + " phones and total price is : " +  total_pp + "(if it's more than your bank account, it's because of tax... take 1 less)");
console.log("also you can buy " + total_acc_c + " accessories with the total price of = " + total_acc_p);

function addTax( a ) {
var b=0;
b = a * Tax;
a= a + b;
return a;
}
