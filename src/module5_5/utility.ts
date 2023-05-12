// Pick 


interface Person {
    name:string;
    email:string;
    contactNumber:string;

}


// amar jodi onk boro ekta object type thake sekhane jodi onk gula properties thake segula thkeke ami jodi olpo kicu niye kaj korte cai sekhane amake pick use korte hobe
// nice udhahoron dilam
type email=Pick<Person,'email'>

// ami jodi ekadik value nite cai amake union use korte hobe 
type Contact=Pick<Person,'email'|'contactNumber'>



// pick er ulta hocce omit 


type Name =Omit<Person,"email">   // ekhon hocce omit dice tar mane email ta bad hoye jabe


// aro 2 ta properties ace segula holo Partial and Required
// to make all the properties be optional type we will use partial type 

type optional =Partial<Person> 
// shob gulake optional kore dey 
// Partial sobgulake optional kore dey 



type RequiredProps = Required<Person>
// ekhon sobgula properties required hobe
// i mean mendatory kore felbe 