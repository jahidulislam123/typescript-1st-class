type GenericArray = Array<number>
const rrollNumberd: GenericArray=[44,23,45];
// const rollNumbe22e:GenericArray=["44","23","65"];
// ekhon jodi string pathay tahole tw kaj korbe na error dekhabe . ekhon ki kora jay 
//  tar jonno ekta boddi aci . generic er angle e ekta T ba onno kono name peramiter diye dibo jate 
// kore jekono type recevive korte pre 


type GenericArrayy<T> = Array<T>
const rrollNumberdd: GenericArrayy<number>=[44,23,45];
const rollNumbe22ed:GenericArrayy<string>=["44","23","65"];
const rollBolleann : GenericArrayy<boolean > =[true,false]
const userNameAndRollNumberr:GenericArrayy<{name:string,roll:number}>=[{
    name:"mr. x",
    roll:1
},{
    name:"mr.y",
    roll:3
}
] 
type NameObject ={
    name:string,
        roll:number
}
const userNameAndRollNumberrr:GenericArrayy<NameObject>=[{
    name:"mr. x",
    roll:1
},{
    name:"mr.y",
    roll:3
}
] 

// ekhane object er name and object takeo type banate pari 

// ei je erokon kore likle hobe 
// r etai generic type 




// generic mane generalize 
const rrollNumber: number[]=[44,23,45];
// etake evabeo likha jay
const rollNumbersss: Array<number> =[44,23,45]
const rollNumbe22:string[]=["44","23","65"];
// same etakeo emon kora jay 
const rollNumbe222 :Array<string> =["44","23","65"]


// bollean er jonno ja korbo 
const rollBollean : Array<boolean > =[true,false]

const userNameAndRollNumber:Array<{name:string,roll:number}>=[{
    name:"mr. x",
    roll:1
},{
    name:"mr.y",
    roll:3
}
] 




// amra caile eker odhik o generic type er argument nite pari 
// jemon

type GenericToupole <X,Y> = [X,Y]
const relation:GenericToupole <string,string>=["jahid","jahid"] ;

const relationonWithSalary : GenericToupole<object,string>=[{
    name:'persian',
    salary : 10 
},
"jahidul"
]



// emon jodi hoy object er vitore amake select kore dibo name thakbe ar roll thakbe specificly bole dite hobe 

type GenericToupoles <X,Y> = [X,Y]
const relations:GenericToupoles <string,string>=["jahid","jahid"] ;

const relationonWithSalarys : GenericToupole<{name:string,salary:number},string>=[{
    name:'persian',
    salary : 10 
},
"jahidul"
]



interface relationonWithSalaryssInterface {
    name:string;
    salary : number
}

// nicer jinis take interface er maddhome korte pari 
const relationonWithSalaryss : GenericToupole<relationonWithSalaryssInterface,string>=[{
    name:'persian',
    salary : 10 
},
"jahidul"
]







// spread operator 

const cruss ="jahidul";
const myInfo ={
    name: "jahidul islam",
    age : 100 ,
    salary : 1234
};
// const newData  = {...myInfo , cruss} 

const addMeInMyCrushMind=(myInfod:object)=>{
    const crush = "kate winslet";
    const newData ={...myInfo,crush};
    return newData;
}
const myInfod = {
    name : "jahidul",
    age : 100,
    salary : 12345
};



const resulttt = addMeInMyCrushMind(myInfod)







// spread operator with generic 

const crusssss ="jahidul";
const myInfoss ={
    name: "jahidul islam",
    age : 100 ,
    salary : 1234
};
// const newData  = {...myInfo , cruss} 

const addMeInMyCrushMindd=<T> (myInfods:T)=>{
    const crush = "kate winslet";
    const newData ={...myInfo,crush};
    return newData;
}
const myInfods = {
    name : "jahidul",
    age : 100,
    salary : 12345
};



const resultttd = addMeInMyCrushMind(myInfods)

