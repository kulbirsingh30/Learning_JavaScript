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