// ekhane const er noton kicu shikhbo 



type PersonType ={
    name :string,
    age:number,
    address :string,
}


// persontype er key gula niye ekta union korte pari 


type newType ="name "| 'age' | 'address' // manually korci ami egula 


// eta khob sohoje ekta operatoor er maddhome korte cai setar nam holo key of operator
type newTypeUsingKeyOf = keyof PersonType 


// ei 2 ta same jinish 
// eta bujar jonno nice kicu kaj korbo 

const a :newType ='address'
const b : newType="age"



// ekhon ei jinish ta diye korbo ta ki 

// dhori ekta object nei 
// ebar ektu normar function nei 

function getProperty (obj:object,key:string){
    // object er kono kicu return korle bracket use kori 
    obj[key]
}


const property = getProperty({
    name:"mr x",
    age:100
},'age')





// 
// ekhon ei jinish ta diye korbo ta ki 

// dhori ekta object nei 
// ebar ektu normar function nei 

function getPropertys<X,Y extends keyof X > (obj:X,key:Y){
    // object er kono kicu return korle bracket use kori 
    obj[key]
}


const propertys = getPropertys({
    name:"mr x",
    age:100
},'age')