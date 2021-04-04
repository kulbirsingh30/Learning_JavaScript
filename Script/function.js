function smallestNubArray(){
    let restSmal=Infinity;
    for (let i=0; i< arguments.length;i++){
        for (let j=0; j<arguments[i].length;j++){
            if(arguments[i][j]<restSmal){
                restSmal = arguments[i][j];
            }
        }
    }
    return restSmal;
}
console.log( "smallNumArray : "+smallestNubArray([1,2,3,4,5],[99,33,5,22]))

//2. Accept n array and return concatenated array

function concateArray(){
    let res =[];
    for (let i=0; i<arguments.length;i++){
        arguments[i].forEach(function (e){
            if(res.indexOf(e)===-1){
                res.push(e); 
            }
                          
        });
    };
    return res; 
  } 
  console.log(concateArray())
  //console.log(concateArray([1,3,4,5],[2,34,3,4,5,]))


//1. js function that accepts an array and an itnem , check if the item is in array
console.log("functions");

function inArraySmart(arr, item){
     return !(arr.indexOf(item)===-1);
}

console.log(inArraySmart([3,4,2,1,44,5,6,7,2],3));
function inArray(arr, item){
    if(arr.indexOf(item)===-1){
        console.log("not present false");
        return false; 
    }
    else{
        console.log("present");
        return true;
    }
     
}

console.log(inArray([1,2,3],5))
console.log(inArray([1,2,3],2))
