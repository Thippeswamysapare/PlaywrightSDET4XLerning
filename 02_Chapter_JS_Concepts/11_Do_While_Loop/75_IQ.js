// Do while vs While


//while -- While will always check the condition first. ---> Entry loop
let a = 10;
while(a < 10){
    console.log(a);
    a++;
}

//do -  do-while will always execute the code inside do block at least once
let b = 10;
do {
    console.log(a);
    b++;
} while (b < 10);



let count = 0;
for (let i = 5; i < 5; i++) {
  count++;
}
console.log(++count);

let i = 0;
while (i < 5) {
  i++;
}
console.log(i);
