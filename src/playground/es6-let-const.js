<<<<<<< HEAD
var nameVar = 'Andrew';

var nameVar = 'Mike';
console.log('nameVar',nameVar);

let  nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);


const nameConst = 'franki';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

getPetName();
console.log(petName);
=======


//Block scoping

var fullName  = 'Jen Mead';


let firstName;


if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
>>>>>>> 36dd3aa58d69483066491b76238d840c1b98662c
