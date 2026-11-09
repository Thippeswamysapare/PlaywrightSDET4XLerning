function add(a,b,c)
{
    return a + b + c;
}

const numbers = [4, 2, 3];
const numbers2 = [14,90, 43,90];
console.log(add(...numbers));
console.log(add(...numbers2)); // take first three elements

// Using spread with Math.max
console.log(Math.max(...numbers));
console.log(Math.min(...numbers2));

function hasError(...code)
{
    return code.some(arg => arg >= 400);
}

let responseCodes=[200,201,401];
console.log(hasError(...responseCodes));

let responseCodes2=[200,304,500,404];
console.log(hasError(...responseCodes2));
