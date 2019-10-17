const add = (a,b) => {
 //   console.log(arguments);
    return a + b;
}
console.log(add(55,1));
const user = {
    name: 'Andrew',
    cities: ['Pholadelphia', 'New York','Dublin'],
    printPlacesLived: function (){
      // const that = this;
        this.cities.map((city) =>  this.name + 'has lived in'+city);


        // this.cities.forEach((city) =>{
        //     console.log(this.name + ' has lived in ' + city);
        // });
        
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 5,

    multiply () {
    return this.numbers.map((x) =>  x *  this.multiplyBy ); 
    }
    // multiply: function(){
    //     this.numbers.map((x) => this.multiplyBy * this.x);
    // }
     
};

console.log(multiplier.multiply());