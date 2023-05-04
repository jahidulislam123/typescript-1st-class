// type script ke jodi boli tr theke ami beshi bhuji tahole take type assertion bole 



let emni : any ;

emni = "next level web developer";

// emni = 222;
// (emni as number).   

// emni.   // evabe dile kono property dekhacce na jodio emni type mone mone tw string dhore neor kotha 
// tai amader ekta kaj korte hobe
(emni as string).length;  // ebar dibe shob propertisie



function kgToGram(param:string | number): string |number |undefined {
    if (typeof param === "string"){
        const value =parseFloat(param)*1000
        return ` the vonverted result is ${value} gram`
    }
    if(typeof param === "number"){
        const value = param*1000 ;
        return value
    }
}

const resultToBeNumber = kgToGram(34) as number ; 
const resultToBeString =kgToGram("1000") as string ;