const result = (score) =>
{
if(score>70)
    return 'Pass';
else
    return 'Fail';
}

console.log(result(75));
console.log(result(65));