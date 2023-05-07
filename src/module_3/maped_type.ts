// map ta dekhi age 
const arraFNumber =[1,2,3];
const arraofString =arraFNumber.map((number)=>number.toString());
console.log(arraFNumber)



type AreaNumber1 = {
    height : number;
    width : number ;
}


type Area={
    [key in 'Persian'|'Forhan' ]:number,
}
// ekhon areaNumber ke eisilty string korte pari 
type AreaString = {
    height : number;
    width:number
}

type rectangularArea:AreaNumber1={
    height : 23,
    width: 45
}


type AreaReadOnly ={
  readonly  height : number,
   readonly width : number ,

}

const rectangularArea:AreaNumber1 ={
    height:12,
    width : 14,
}


// dhori ami width er man change korbo 
// amke ki korte hobe amake 
rectangularArea.height=10;

// object er property ke jevabe amra acces korte pari temoni type er properties ke accept korte pari 
type A1 = AreaNumber['height'] //look up type

// amader jene rakha valo keyof sobsomoy union kore dey properties gula ke 
type B =keyof AreaNumber;// mane width |height

// // obj ke amra jevabe access kori 
// const obj ={
//     name :"person",

// }
// obj['name']