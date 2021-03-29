

for(let a=0;a<10;a++){
    console.log("table for " +a);
    for(let b =0; b<=10;b++){
        console.log( a+" * "+b+" :"+a*b);

    }
}


let q=0;
do{
    console.log(q);
    q++;
}while(q<3);

let i=0;
while(i<=3){
    console.log(i);
    i++;
}

for(let i=0;i<5;i++){
    console.log("test");
}

//get the date
//get the day from date 
//ask the user to enter the day
//match 

let today = new Date();
console.log("today date : "+today);
const day = today.getDay();
console.log("day :"+day);
let guessDay = prompt("Guess the day");
console.log(guessDay);
let result;
switch(day){
    case 0 : 
        result="Sunday";
        break;
    case 1 : 
        result="Monday";
        break;
    case 2 : 
        result="Tuesday";
        break;
    case 3 : 
        result="Wednesday";
        break;  
    case 4 : 
        result="Thrusday";
        break;
    case 5 : 
        result="Friday";
        break;
    case 6 : 
        result="Saturday";
        break;
    
}
if(guessDay.toLocaleLowerCase==result.toLocaleLowerCase){ 
    console.log("true");
    alert(guessDay+" is "+result+" you are right");

}
else{
    alert("Bad luck !!! Please try again");
}
 
//generate random number 
// input from user 
// check user enter the correct
// alert correct answer
let genNumber = Math.ceil(Math.random()*10);
console.log(genNumber);
let guessNumber = prompt('Guess the number between 1 & 10 ');
console.log(guessNumber);

if(genNumber==guessNumber){
    console.log("true");
    alert("Correct you won");
}else{
    console.log("false");
    alert("You loose, try again");
}




//switch case ::  group together 5 & 6

let x =5;
switch(x){
    case 5 : 
    case 6 :
        console.log("X : 5 or 6");
        break;
    case 7 : 
        console.log(" is "+x);
        break;
     default :
        console.log("! 5 or 6");      
}
//falsy values : boolean , null, undefined, "", 1, 0
if (""){
    console.log("true");
}else {
    console.log("false");
}

// operator 
// === used to checks value and type 
let y =7; 
a = y==="7"; 
if (a){
    console.log("returns : "+a);
}
else{
    console.log("returns : "+ a);
}


//alert("external JS");
//dataTypes -- primitive or object
// 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null

var num =10;
console.log(num);
console.log(num+" of type : "+typeof(num));

var myName ="Hi afa";
var name= 'afa';
console.log("double quote string : "+myName + ' , single quote string :'+name );
console.log(myName+" of type : "+typeof(myName));


var myName = true;
console.log(myName +" now of type  :"+typeof(myName));

a = null;
console.log("value :"+a);
console.log(a +" of type  : "+typeof(a))

var b; 
console.log("just declared b :  "+b);
console.log(b +" type of un asssigned variable "+typeof(b));

//BigInt is created by appending n to the end of an integer literal — 10n — or by calling the function BigInt().
const alsoHuge = BigInt(9007199254740991);
const previouslyMaxSafeInteger = 9007199254740991n;
console.log(alsoHuge+" of type "+ typeof(alsoHuge));
//Using JSON.stringify() with any BigInt value will raise a TypeError as BigInt values aren't serialized in JSON by default. However, you can implement your own toJSON method if needed:

//BigInt.prototype.toJSON = function() { return this.toString()  }

//Instead of throwing, JSON.stringify now produces a string like this:

//JSON.stringify(BigInt(1))
// 


//calculating prime using BigInt

function isPrime(args){
    for(let i=2n;i*i<=args;i++){
        if(args%i===0)
        return false;
    }
    return true;
}

function nthPrime(nth){
    let maybePrime =2n;
    let prime =0n;
     

    while(nth>=0n){
        if(isPrime(maybePrime)){
            nth--;
            prime=maybePrime;
        }
        maybePrime++
    }
    return prime;

}


console.log(nthPrime(19n));