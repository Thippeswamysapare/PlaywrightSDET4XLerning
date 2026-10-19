let amul = null;
let val = amul ?? "NANDANI Milk";
console.log(val);
// This demonstrates the nullish coalescing operator (??).
// Initial value of amul: null
// val = amul ?? "NANDANI Milk" --> val = "NANDANI Milk" (because amul is null)
// Final value of val: "NANDANI Milk"

let api_response = null;
let responsedata = api_response ?? "{}";
console.log(responsedata);

let api_response1 = "Pramod";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);