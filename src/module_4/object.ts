// class create korbo 
class Animal {
    // animal class er moddhe ei ei properties gula thakbe 
    name:string;
    species:string;
    sound : string;
    // class likhle evabe constructor declare korte hoy
    constructor(name:string, species:string, sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound;
    }

    // Class e kono function likhle eke bola hoy method 
    // But arrow function use korbo na normal function use korbo 
    makesound(){
        console.log(`th ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('german shepard','dog','ghe2w ghew')
dog.makesound();