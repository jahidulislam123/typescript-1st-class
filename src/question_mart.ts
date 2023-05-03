// ternary operator 
const age: number = 22; 
if(age>=18){
    console.log("yes adult");
}else{
    console.log("no not adult")
}


// ei oporer jinista ternary operator er maddhome korte pari 

const isAdult =age >= 18 ? "yes ": "no "
console.log(isAdult);


// nullish coalescing operator = ??


// null and undefined 
// 
const isAuthenticationUser = ""; // sudo null and undefiend holei kaj korbe notoba korbe na 

const userName = isAuthenticationUser ?? "Guest";
// mane hocce 
const userName2 = isAuthenticationUser ? isAuthenticationUser  : "Guest";
// 22 ar 24 number line ek 
// question mark 2 ta dile jodi isAuthenticationUser thake othoba na thake 
console.log({userName},{userName2});



type Manush ={
    namess : string,
    age:number,
    address : {
        city : 'NO CITY',
        ROAD : "NO ROAD",
        home ? : '';
    }

}


const manush1 : Manush ={
    namess:"manush",
    age : 100 ,
    address : {
        city : 'NO CITY',
        ROAD : "NO ROAD",
    },
}


const home = manush1?.address?.home  ?? "no home"
console.log({home})