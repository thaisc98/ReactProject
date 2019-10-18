

class Person {
    constructor(name,age = 0){
        this.name = name;
        this.age = age;
    }

    getBye(){
        return `byeee, my name was ${this.name}`;
    }

    getDescripcion(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{  
    constructor(name,age,major = ''){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescripcion(){
       let descripcion = super.getDescripcion();
       

       if(this.hasMajor){
           descripcion += `Their major is ${this.major}`;

       }
       return descripcion;
    }

}

class Traveler extends Person{
    constructor(name,age,homeLocation = ''){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getBye(){
        let bye = super.getBye();

        if(this.homeLocation.length > 0){
            bye += `I'm visiting from ${this.homeLocation}`
        }
        return bye;
    }
}

const me = new Traveler('Thais Contreras',21,'');
console.log(me.getBye());