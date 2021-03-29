//arrays

const hoobies =['sports','cooking',1,true];
for(let hobby of hoobies){
    console.log(hobby);
}

console.log(hoobies.map(hobby => 
    'Hobby :' + hobby
));
console.log(hoobies);


//objects
const person ={
    name : 'billi',
    age : 29,
    greet (){
        console.log("hi "+this.name)
    }
};

person.greet();




const hasHobbies = true;
let name ="max";
let age =29;


const summarizeUser =(userName, userAge, userHobbies)=> {

    return('Name is '+userName+" aged "+userAge+" having "+userHobbies);

};

const add = (a,b)=> a+b;
const sumRand = () => 1+2; 

console.log(sumRand());

console.log(add(1,2));

console.log(summarizeUser(name,age,hasHobbies));

