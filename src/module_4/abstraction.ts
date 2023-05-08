// abstraction mane holo kono ekta jinish somporke absa absa jana jay 
// full jana jay na 
// abstraction 2 vabe kora jay 
//1 : interface er maddhome 
// 2 : abstract keyword use koraro maddhome 




// prothome interface diye korbo 



// prothome behicall name ekta object create korbo
// INTERFACE            holo type gula ekhane declare kore deoa 
interface Ibehicle {
    name : string;
    model : string

}

const behicle :Ibehicle={
    name:'car',
    model:"i34"

}



interface Ivehicle {
    startEnging():void
    stopEngieng():void
    move():void;
}

// class er moddhe :Ivehicle dite parbona 
// amake implements like eta ota moto kore dekhate parbo 
// full implementation na kintw bhujte parbo erokom erokom hobe

class Vehicle implements Ivehicle {
    constructor(public name :string,public brand :string,public model:string){

    }
    startEnging(): void {
        console.log("i am staring engine");
    }
    stopEngieng(): void {
        console.log("i am stoping engine ")
    }
    move(): void {
        console.log("i am moving the car")
    }
    test(){
        console.log("i am for testing purfuse")
    }
}

// ekhon instance toiri korbo 

const vehilce4 = new Vehicle('car','toyota','lal')




// ekhan abstrack class
//etar monae hocce ekta class aonno class gulake follow korbe 


// prothome ekta class toiri korlam 
// ebar vehile55 class take abstract class banabo
abstract class Vehicle55 {
    constructor(public name :string,public brand :string,public model:string){

    }
    abstract startEnging(): void
    abstract stopEngieng(): void 
    move(): void {
        console.log("i am moving the car")
    }
    // move take normal rakhlam and test take delete kore dilam

}

// follow korar jonno car exte
class Car extends Vehicle55 {
    // jeheto vehicle55 er shob abstract just follow korci ekhon amake nijeo korte hobe
    startEnging(): void {
        console.log("i ma starting engine");
    }
    stopEngieng(): void {
        console.log('i am stoping engine')
    }
}

// abstract use korle instance toiri kora jay na 

// const car1 = new Vehicle55("car","honda","2345")
// ekhon ami instance create korte probo na 
// ami follow korte parbo kintw create korte parbo na 