// ekhane generic interface toi ri korbo 



interface CrushInterface<T> {
    name: string,
    husband : T
}

const crush1 : CrushInterface<boolean>= {
    name : "JAHIDUL ISLAM ",
    husband:true
};

const crush23 : CrushInterface<string> ={
    name:'LALILA',
    husband :"pERSON"
}


const ccrush :CrushInterface<object> ={
    name: "layla",
    husband : {
        name : "jahidul islam",
        id:34,
        age :34
    }
}

interface HusbandInterface {
    name:string,
        id:number,
        age:number

}

const ccrushs :CrushInterface<HusbandInterface> ={
    name: "layla",
    husband : {
        name : "jahidul islam",
        id:34,
        age :34
    }
}


// ekahne ekadik generic use korbo 
interface CrushEkadikGeneric <T,U=null> {
    name : string ,
    husband : T,
    wife? : U

}

const crushlll : CrushEkadikGeneric<boolean> ={
    name: "JAHIDUL ISLAM",
    husband:true , 
}


// undefine ba null bosate pari jate kore vhul na dekhay 
// ekahne ekadik generic use korbo 
interface CrushEkadikGeneric <T,U> {
    name : string ,
    husband : T,
    wife? : U

}

const crushlll1 : CrushEkadikGeneric<boolean,undefined> ={
    name: "JAHIDUL ISLAM",
    husband:true , 
}


// ebar null dibo 
// ekahne ekadik generic use korbo 
interface CrushEkadikGeneric <T,U> {
    name : string ,
    husband : T,
    wife? : U

}

const crushlll1d : CrushEkadikGeneric<boolean,null> ={
    name: "JAHIDUL ISLAM",
    husband:true , 
}


// othoba value diye dibo 
interface CrushEkadikGeneric <T,U> {
    name : string ,
    husband : T,
    wife? : U

}

const crushlll1dd : CrushEkadikGeneric<boolean,string> ={
    name: "JAHIDUL ISLAM",
    husband:true , 
    wife:"mila"
}



// object er khetre jevabe use korbo 

const crush4 : CrushEkadikGeneric <object,object> ={
    name : "parsial",
    husband :{
        name :'lallu mia',
        age : 23

    },
    wife:{
        name : "winset",
        age : 45
    }
}

// object declare kore dibo "


const crush4d : CrushEkadikGeneric <{name:string,age:number},{name:string,age:number}> ={
    name : "parsial",
    husband :{
        name :'lallu mia',
        age : 23

    },
    wife:{
        name : "winset",
        age : 45
    }
}
