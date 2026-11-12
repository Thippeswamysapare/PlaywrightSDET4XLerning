// *
// **
///***  

let n=6;    
for(let i=1;i<=n;i++){
    let str="";
    for(let j=1;j<=i;j++){
        str+="*";
    }
    console.log(str);
}

console.log("----------------------------");
let k=4;
for (let i=1;i<=k;i++){
    for (let j=1; j<=i;j++)
    {
        process.stdout.write("*");
    }
    console.log(" ");

}
