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