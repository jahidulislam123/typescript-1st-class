// Normal Function 



function add(num1:number,num2:number):number {
    return num1+num2;
}
add(2,3);




// any type korar jonno 
// eta jate na vhul dhore 
// Tai ami tsconfig.json e 86 number line e uncomment kore noImplicitAny take false kore dibo ; 



const addArrow = (num1:number,num2:number):number =>num1+num2;


// callback function : 


const arraya =[1,4,5];
const newArray= arraya.map((elem:number)=>elem*elem)


const person:{
    name: string,
    balance:number,
    aDDBalance(money:number):void ;
} = {
    name: 'jahid',
    balance :5,
    aDDBalance(money:number){
        // return this.balance +money;
        // or 
        console.log(`my new balance is ${this.balance + money}`)
    }
}




// default value jodi add korte cai 
function adds(num1:number=10,num2:number):number {
    return num1+num2;
}
// adds(3);
// first value te default value dibo na karon first default value dile error asbe 
// jokhon fuction call korbo tokhon jodi ami 2 ta value na dei 


// ami default value user korbo second tate sobsomoy tahole function call korar somoy ekta value dileo somossa hobe na porer default value dhore nibe 
function addss(num1:number,num2:number=12):number {
    return num1+num2;
}
addss(3);



const myFriends =['chandler', 'joey','ross']
const newFriends =['monica','rachel','pheobe']
// myfriend er sathe noton frined add korno 
myFriends.push(...newFriends)
console.log(myFriends);




// rest peremeter 
// const greetFriends =(...friends:string[]):void=>console.log(friends);
const greetFriends =(...friends:string[]):void=>friends.forEach((friend=>console.log(`hi ${friend}`)));


greetFriends("kashem","hasem","lasem","bangla bhai");
// ekhon ami noton friend banate parci na . so sei jonno rest operator apply korbo 


// ekhane 2 ta jinish likhi rakhi \
// destructuring 
const bestFriend = {
    fullName: "jahidul islam",
    age : 23
}

const{fullName:myfullName}=bestFriend;
console.log(myfullName);
// full name er pore kehane string deoa jabe na ekhane ekta nam dite hobe jetake ami console log korbo 