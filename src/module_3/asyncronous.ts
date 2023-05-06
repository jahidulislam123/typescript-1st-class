// amra sobai promise somporke jani 




const makePromise =():Promise<string>=> {
   return new Promise<string> ((resolve,reject)=>{
        // promise e bole dite hoy amra ki resolve korbo naki reject korbo 
        const data:string = 'data is fetched'
        if(data){
            resolve(data)
        }else{
            reject ("failed to fetced data ")
        }

    })
}


// await use korle obossoi amake async use korte hobe
// void mane kono kicu return korbona 

const getPromiseData =async ():Promise<string> =>{
    const data =await makePromise();
    return data;
}


// boolean same way te korte pari
//  same way te object 
// and same way te numbe o korte pari





// amra  https://jsonplaceholder.typicode.com/todos/1 eta browse kore eishob informatin gula paici 

interface ITodo 
    {
        userId: number,
        id: 1,
        title: string,
        completed: boolean
      }


// ekhon ami jason data er jonno dkehbo 


const getTodo =async (): Promise<ITodo> =>{
    // ekhane itodo type er proomise terurn korbo 
    // amra tokhoni async await use korbo jokhon kno kicur jonno wait kora lagbe . 

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}