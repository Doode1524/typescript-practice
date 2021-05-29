"use strict";
//classes
// class Invoice {
//     readonly client: string;
//     private details: string;
//     public amount: number;
//     constructor(c: string, d: string, a: number) {
//         this.client = c;
//         this.details = d
//         this.amount = a
//     }
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }
///////////////////////////////////////
// shortcut for above ^^^ (only works with access modifiers)
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Joey', '1/8th of weed', 50);
var invTwo = new Invoice('Ella', '1/4th of weed', 90);
var invoices = []; // now we can make custom types
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
////////////////////////////////////////////
var anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
