let responseTime = 850; // ms
let sla = 1000;         // ms

let slaStatus = responseTime <= sla
    ? "Within SLA ✅"
    : "SLA breached ❌";

console.log(`Response: ${responseTime}ms - ${slaStatus}`);
 // ${responseTime} and ${slaStatus} are used within the template literal to dynamically insert 
 //    their values into the string.
 //  ` backtick 
 