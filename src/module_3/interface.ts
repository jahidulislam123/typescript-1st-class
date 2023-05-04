// allias ke onno vabe korakei interface bole 
// jemon 


type user = {
    name : string ,
    age: number 
}; 



interface IUSER {
    name: string ,
    age:number,
}

interface IextendedUser extends IUSER {
    role : string
}
 const useri:IextendedUser ={
    name:"jahid",
    role:"45",
    age:43

    
 };

const userWithTypeAllias :user = {
    name : "type allias ",
    age : 100 
}

const userWithInterface : IUSER = {
    name : 'interface',
    age : 344
}





type addNumbersType = (num1 : number , num2 : number) =>number;
const addNumbers : addNumbersType = (num1,num2)=>num1+num2;

// ekhano etake caileo interface er maddhome korte pari 


interface iAddNumbers {
    (num1:number , num2:number):number
}


// tobe function er khetre amra typelare kei ekhane user korbo interface ke na 


// array ?

type rollNumberType = number[]
const rollNumberss:rollNumberType=[2,3,5]
// ei same jinish ta je type allias er maddhome korlam eta caile interface er maddhome korte pari 
interface iRoolNumbers {
    [index:number]:number ; // array er index thake index e string number vivinno jinish 
}