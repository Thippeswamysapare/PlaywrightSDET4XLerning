let firstname= "hello Java Script";

let revfname = "";
for (let i= firstname.length-1; i>=0; i--) {
    revfname += firstname[i];
}
console.log(revfname);