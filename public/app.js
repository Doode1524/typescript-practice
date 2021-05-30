import { Invoice } from './classes/Invoice.js';
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
const invOne = new Invoice('Joey', '1/8th of weed', 50);
const invTwo = new Invoice('Ella', '1/4th of weed', 90);
let invoices = []; // now we can make custom types
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
////////////////////////////////////////////
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
