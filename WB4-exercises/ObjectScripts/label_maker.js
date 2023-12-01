"use strict";

let customer = {
    name:"Niya",
    address: "123 happy lane",
    city: "Bronx",
    state:"New York",
    zip:"12345"
}


function printContact(customer){
    console.log(customer.name);
    console.log(customer.address);
    console.log(`${customer.city}, ${customer.state} ${customer.zip} `);
}
printContact(customer);
