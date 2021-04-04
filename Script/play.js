//objects destructuring 
const person ={
    name2 : 'billi',
    age2 : 29,
    greet (){
        console.log("hi "+this.name2)
    }
};
const printName =({ name2})=>{
    console.log(name2);
}
printName(person);

const {name2, age2 } = person;
console.log("console : "+ name2, age2);


//rest vs spread

const hoobies =['sports','cooking',1,true];
for(let hobby of hoobies){
    console.log(hobby);
}

console.log(hoobies.map(hobby => 
    'Hobby :' + hobby
));

hoobies.push('program');
console.log(hoobies);

const copiedArray = hoobies.slice();
const copyArray = [...hoobies];
const nestedArray = [hoobies];
console.log(nestedArray);
console.log(copiedArray);
console.log(copyArray);


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

