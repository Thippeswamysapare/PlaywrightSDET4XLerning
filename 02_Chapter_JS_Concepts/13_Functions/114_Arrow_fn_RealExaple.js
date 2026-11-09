// Validate API response
// Normal fuction 
function APIResponseValidator(responseCode) {
if (responseCode === 200 || responseCode === 201)   
    return 'Success';
else
    return 'Error'; 
}
// Function expression
const APIResponseValidatorExp = function(responseCode)
{
    if (responseCode === 200 || responseCode === 201)       
        return 'Success';
    else
        return 'Error'; 
}

// Function  as Arrow
const APIResponseValidatorArrow = (responseCode) => {
    if (responseCode === 200 || responseCode === 201)       
        return 'Success';
    else
        return 'Error'; 
}

console.log(APIResponseValidator(302));
console.log(APIResponseValidatorExp(200));
console.log(APIResponseValidatorArrow(201)) ;