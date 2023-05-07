class Student {
    name :string;
    age:number;
    address:string;



    constructor(name:string,age:number,address:string){
        // initialize korte hobe 
        this.name=name;
        this.address=address;
        this.age=age;

    }

    //method toiri korbo 
    makeSleep (hours:number):string { // jehetw string return korteci
        return  `This ${this.name} will sleep ${hours}`

    }
}


class Teacher {
    name :string;
    age:number;
    address:string;
    designation:string

    constructor(name:string,age:number,address:string,designation:string){
        this.name=name;
        this.address=address;
        this.age=age;
        this.designation=designation;  // deference 

    }

     //method toiri korbo 
     makeSleep (hours:number):string { // jehetw string return korteci
        return  `This ${this.name} will sleep ${hours}`

    }


    takeClasses (numberOfclass:number):string{ // deference
        return ` This ${this.name} will take ${numberOfclass}classes `
    }
}








// opopere calss gular moddhe onk gula properties and fuction common ace 
// common jinish gula niye arekta class toiri korbo 





// common gula niye arekta class toiri korbo 
class parents {
    name :string;
    age:number;
    address:string;


    constructor(name:string,age:number,address:string){
        // initialize korte hobe 
        this.name=name;
        this.address=address;
        this.age=age;

    }

    makeSleep (hours:number):string { // jehetw string return korteci
        return  `This ${this.name} will sleep ${hours}`

    }

}

class Student1 extends parents {

    // just ekta super class use korte hobe
    constructor(name:string,age:number,address:string){
        super(name,age,address)

    }
}

const newStudent =new Student1("jahidul",23,"barura")


class Teacher1 extends parents {
    
    designation : string;
    // designation eta new properties extends korci 
    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation=designation;
        

    }

    takeClasses (numberOfclass:number):string{ // deference
        return ` This ${this.name} will take ${numberOfclass}classes `
    }
}


const newTeacher =new Teacher('jahid sir ',34,'usea',"froffesor")