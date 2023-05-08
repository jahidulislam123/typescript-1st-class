// poly mane onk gula 
// morphism mane hocce rup 
// je jinish tar onk gula rup thakbe takei polymorphism bole

class Person {
    /**
     * name
     */
    public takeNap() {
        console.log("i am sleeping 8 hours per day ")
        
    }
}



class Studentd extends Person{
    takeNap():void{
        console.log("I am sleeping 10 hours per day")
    }
}


class Developer extends Person{
    takeNap():void{
        console.log("i am sleeping 5 hours per day");
    }
}

// ekta function banai 
function getNap(params:Person){ // params e person type class diye dici 

    params.takeNap();
}

// proti class er jonno erokom instance banano lage
const person1 = new Person();
const person2 = new Studentd();
const Person3 = new Developer();


// ekhon function take jodi call kori and function er vitore instance gula dei 
getNap(person1);
getNap(person2);
getNap(Person3)










// new example 
class Shape  {
    getArea():number{
        return 0 ;
        // kicu return na korleo at least 0 likhe dite hobe

    }
}

class Circle extends Shape {
      redius: number;
     constructor(redius:number){
        super(); // jehetw etends korci tai super call korci //  r jehetw jake extends korci tar kono nijosso prperties nai tai eta perameter dei ni 

        this.redius=redius;
     }
     // polymorphism e same type er method neoa hoy eta polymorphism bole 
     getArea(): number {
         return Math.PI*this.redius*this.redius;
     }
}



class Rectengular extends Shape{
    height : number ;
    width : number ;
    constructor(height:number,width:number){
        super()
        this.height=height;
        this.width=width;

    }
    getArea ():number{
        return this.width*this.height;
    }
}


function getAreaofShape(params:Shape){
    console.log(params.getArea())
}

// instance cara properties pathano jay na
getAreaofShape(new Circle(10));
getAreaofShape(new Rectengular(10,12));