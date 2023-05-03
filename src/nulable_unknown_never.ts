const searchName =(value : string | null)=>{
    if(value === null){
        console.log("there is nothing to search")
    }else{
        console.log("searching");
    }
}


// searchName("mezba")

searchName(null)


// ami janina type ki hobe 
const getMyCarSpeed =(speed : unknown) =>{
    if(typeof speed === 'number'){
        const convertedSpedd = (speed*1000)/3600
        console.log(`My speed is ${convertedSpedd}`)
    }if(typeof speed ==='string'){
        const [value,unit]  =speed.split(' '); // ekhane 2 ta ongso thakbe ['10' , 'kmh-1']
        const convertedSpedd = ( parseFloat(value)*1000 )/3600 ; 
        console.log(`My speed is ${convertedSpedd}`)
    }else{
        console.log("there is nothing ")
    }
}

getMyCarSpeed(10)
getMyCarSpeed("10 Km")
getMyCarSpeed(true)



// never 
function throwError(message:string):never{
    throw new Error (message)
} 

throwError("error hoyece ");

