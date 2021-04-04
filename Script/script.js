let employee ={
    name:"test",
    email: "adb@fam",
    job: "full stack",
    display: function(a, b){
        console.log(a+b);
        console.log("Name : "+ this.name+ " Email : "+ this.email );
    }   
}

let student = {

    name : "Med",
    email : "Stundet@gm.cia"
}

employee.display.call(student,10,20);
employee.display.apply(student,[1,2]);
   
let binResult = employee.display.bind(student);
binResult(100,200);


console.log(this);

function sumDynamicArgu(){
    let r =0;
    for(let i=0; i<arguments.length;i++){
        r = r+arguments[i];
    }
    return r;
}



function randomNUmber(a,b){

    if(a===undefined && b===undefined){
        return 0;
    }
    else if(b===undefined){
        return a;
    } 
    else 
    {
        return a+b;
    }
}

console.log(randomNUmber());


let arr =[5,120,24,12,445,55,2,0];
let num2 =[15,120,234,142,4455,575,28,108];
function sumArray(num){
    let sum = num.reduce( function(acc, e){
        return acc+ e;
    },0);
    return sum;
}

let results = sumArray(num2); 
console.log(results);

function sum(){
    let sumAll = arr.reduce(function(acc,e){
        return acc+e;
    },0);
    return sumAll;
}

function filterArr(){
    let res = arr.filter(function (e){
        return e >100;
    })
    return res;
}

var res = sum();
var res2 = filterArr();
console.log(res);
console.log(res2);

function displayHello(){
    console.log("hello World");
}

displayHello();

for(let i=0; i<5;i++){
    displayHello();
}

var friends = [
    {
        name: "Kulbir Singh",
        email: "singh.kul@gmail.com",
        profilePic:"",
        isOnline: true
    },
    {
        name: "Rahul",
        email: "p.rahul@gmail.com",
        profilePic: "",
        isOnline:false

    },
    {
        name:"Mahender",
        email:"mahi@gmail.com",
        profilePic:"",
        isOnline:true
    }
]