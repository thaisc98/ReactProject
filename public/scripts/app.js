'use strict';

<<<<<<< HEAD
var nameVar = 'Andrew';

var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'franki';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
console.log(petName);
=======
var add = function add(a, b) {
    //   console.log(arguments);
    return a + b;
};
console.log(add(55, 1));
var user = {
    name: 'Andrew',
    cities: ['Pholadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // const that = this;
        this.cities.map(function (city) {
            return _this.name + 'has lived in' + city;
        });

        // this.cities.forEach((city) =>{
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,

    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (x) {
            return x * _this2.multiplyBy;
        });
    }
    // multiply: function(){
    //     this.numbers.map((x) => this.multiplyBy * this.x);
    // }

};

console.log(multiplier.multiply());
>>>>>>> 36dd3aa58d69483066491b76238d840c1b98662c
