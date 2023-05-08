class Counter {
    counter : number;
    constructor(counter:number){
        this.counter=counter

    }

    increment():number{
      return  this.counter=  this.counter+1
       
    }

    decrement ():number{
        return this.counter =this.counter-1;
    }
}


const instance1 =new Counter(0);
const instance2 = new Counter(1);
console.log(instance1.increment());
console.log(instance2.increment());






//
// static bosabo constructor uthiye dibo 
class Counter1 {
   static counter1 : number=0;
 
    increment():number{
      return  this.counter1=  this.counter1+1
       
    }

    decrement ():number{
        return this.counter1 =this.counter1-1;
    }
}


const instance11 =new Counter1();
const instance22 = new Counter1();
// static e value ta diye dile funciton e value deoa lagbe na 
console.log(instance11.increment());
console.log(instance22.increment());
