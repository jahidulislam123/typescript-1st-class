
type CrushType = {
    name:string;
    age?:number;
    profession:string;
    address:string

}
const crush2 : CrushType = {
    name:"moina pakhi",
    age:22,
    profession:"web developer",
    address:"uganda"
}


//crush 2 
const crush3 : CrushType = {
    name:"joina pakhi",
    // age dibo na tai opore optional type diye dici 
    profession:"software developer",
    address:"Mexico"
}


// bollean er jonno . sobkicur jonnoi hobe
type CrushMarriedType = boolean ;
const isCrushMarried : CrushMarriedType =false;

// string er jonno 

type CourseNameType = string 
const coursess : CourseNameType = "nest level web developer"


// function er khetre 

const calculate =(number1: number,number2:number , operation:
    (x:number,y:number)=>number)=>{

    return operation(number1,number2)
}


calculate (10,20,(x,y)=>x+y);
calculate(10,23,(x,y)=>x-y);
calculate(10,23,(x,y)=>x/y);
calculate(10,23,(x,y)=>x*y);


// ekhon custom type diye korbo 
type operationType =(x:number,y:number)=>number 
const calculate1 =(number1: number,number2:number ,
     operation:operationType)=>{

    return operation(number1,number2)
}


calculate1 (10,20,(x,y)=>x+y);
calculate1(10,23,(x,y)=>x-y);
calculate1(10,23,(x,y)=>x/y);
calculate1(10,23,(x,y)=>x*y);
