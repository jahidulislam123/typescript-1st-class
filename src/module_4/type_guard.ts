// gaurd ki 
// kono kicuke bada deoa kei gaurd bole 


// onk dhoroner type thake 
// key oftype
type AlfaNeumeric = string|number

function add(param1 :AlfaNeumeric, param2 : AlfaNeumeric):AlfaNeumeric{
    if(typeof param1 == 'number' && typeof param2 =='number'){
        return param1+param2
    }else{
        return param1.toString()+param2.toString();
    }
}


add('1',"3")
add(2,3)


// in guard 

// ekta object er type banabo 
type NormalUserType ={
    name : string
}

type AdminUserType ={
    name :string,
    role : 'admin'
}

function getUser (user:NormalUserType|AdminUserType):string{
    // ekhane ami user.name dile ami jekhono type er name tai peye jeite pari 
    // so amake guard use korte hobe 
    if('role' in user){
        return `I am an admin and my role is ${user.role}`
    }else{
        return   `i am a normal user`
    }
}

const normaluser1 : NormalUserType={name:'jahidul islam'}
const adminUser1 : AdminUserType ={name:"mr kallu",role:"admin"}

console.log(getUser(normaluser1));
console.log(getUser(adminUser1))



// intance of guard 
class Animal5 {
    name:string;
    species:string;
    constructor(name:string,species:string){
        this.name=name;
        this.species=species;
    }
    makeSound (){
        console.log("i am a making sound")
    }
}

// extends kore child class toiri korbo 
class Dog extends Animal5 {
    constructor(name:string,species:string){
        super(name,species)
    }
    makeBark(){
        console.log("i am barking")
    }
}

class Cat extends Animal5 {
    constructor(name:string,species:string){
        super(name,species)
    }
    makeMew(){
        console.log("am am mew mew")

    }
}

function getAnimal (objj : Animal5){
    if(objj instanceof Dog){
        objj.makeBark()
    }
    if(Animal5 instanceof Cat){
        objj.makeMew()
    }else{
        objj.makeSound()
    }
}

const animal11 = new Dog("Geramn Bai","dog") // instance -> Dog
const animal22 = new Cat("parsian vai",'cat') // instance ->cat




// same jinish tai onno vabe kora jay 
function getAnimal1 (Animal5:Animal5){
    if(isDog(Animal5)){
        Animal5.makeSound();
    }
}

// 4.4 video ta last diye arektu bar dkehbo 
