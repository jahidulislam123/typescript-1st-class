// import { add as addtwo ,substruct,multiplu} from "./module";
// amra evabe protidin comma diye na likhe onno vabe korte pari 
// import * as Method from "./module"
// // default ta jevabe import korbo ;

// import multiplu  from "./module";
// const add = (param1:number,param2:number,param3:number):number=>{
//     return param1+param2+param3;
// }

// // export import er maddome share korte parbo 

// // const res = addtwo(4,5);

// // const res2 =substruct(5,4)

// // const res3 = multiplu(4,5);



// // ekhano evabe korte hobe 
// const res = Method.add(4,5);

// const res2 =Method.substruct(5,4)

// const res3 = multiplu(4,5);











// finally ami jevabe korbo 
// import { add as addtwo ,substruct,multiplu} from "./module";
// amra evabe protidin comma diye na likhe onno vabe korte par

// import addFrom from './utils/add'
// import subFrom from './utils/substract'
// import multiFrom from './utils/multiply'
// uporer 3 line na kore index.ts er modde egula copy kore bosailam 
import Method from './utils/index'
// import jekono  from "./module";
const add = (param1:number,param2:number,param3:number):number=>{
    return param1+param2+param3;
}

// export import er maddome share korte parbo 

// const res = addtwo(4,5);

// const res2 =substruct(5,4)

// const res3 = multiplu(4,5);



// ekhano evabe korte hobe 
const res = Method.addTwo(4,5);

const res2 =Method.multiply(5,4)

const res3 = Method.substract(4,5);