"use strict";
function parsePartCode(partCode){
    return {
        supplierCode: partCode.split(":")[0],
        productNumber: partCode.split(":")[1],
        size: partCode.split("-")[1]
        
    }
}

let part1 = parsePartCode("XYZ:1234-L");
console.log(`Supplier Code: ${part1.supplierCode} 
Product Number: ${part1.productNumber}
Size: ${part1.size}`);



