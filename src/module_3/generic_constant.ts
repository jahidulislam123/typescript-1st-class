const addMeInMyCrushMindddd =<T extends{name:string,age:number,salary:number}>(myInfoo: T)=>{
    // ekhane generic use korteci valo kotha but ami extends korteci mane force korteci 
    // mane object asbe valo kotha but ekhane object e name age salary ei 3 ta jinish tahkte hobe

    const crush = "kate Winslet";
    const newData = {...myInfo,crush};
    return crush;
} ;

//myInfo er jonno ekta type declare korte hobe 
type MyInFoType ={
    name:string,
    age:number,
    salary:number
}
const myInfoo:MyInFoType ={
    name : "jahidul Islam ",
    age : 100,
    salary : 232434,
};


const resultss1 =addMeInMyCrushMindddd<MyInFoType>(myInfoo);




// barti properties o pathate parbo kinto jegula declare korci egualr kom pathate parbona 

const addMeInMyCrushMinddddd =<T extends{name:string,age:number,salary:number}>(myInfooo: T)=>{
    // ekhane generic use korteci valo kotha but ami extends korteci mane force korteci 
    // mane object asbe valo kotha but ekhane object e name age salary ei 3 ta jinish tahkte hobe

    const crush = "kate Winslet";
    const newData = {...myInfo,crush};
    return crush;
} ;

//myInfo er jonno ekta type declare korte hobe 
type MyInFoTypee ={
    name:string,
    age:number,
    salary:number
    others:string,
}
const myInfooo:MyInFoTypee ={
    name : "jahidul Islam ",
    age : 100,
    salary : 232434,
    others:"jahd"
};


const resultss11 =addMeInMyCrushMinddddd<MyInFoType>(myInfooo);
