

// ekta arrow functjion banay feli

const createArray =(param:string):string[]=>{
    return [param]

}

// ami ekhon jetai pathai amake ekta array return korbe 
const result = createArray("banaladesh")


// etar moddhei ami generic banabo 
const createArray1 =<T> (param :T):T[]=>{
    return [param]
}

const result2 =createArray1<string>("Bangladesh")
const result2d =createArray1<boolean>(true);
const result2dd =createArray1<number>(23);
const result2dddd =createArray1<{name:string,age:number}>({name:"bangladesh",age:12});
const result2ddd =createArray1<object>({name:"bangladesh",age:12});


// ekhon ami jodi ekadik  generic use korbo 

const createArrayee =<X ,Y> (param1 :X , param2 :Y) :[X,Y] =>{
    return [param1,param2]
}


const resultss = createArrayee<string,string > ("Bang","tang");
const resultsss= createArrayee<boolean,[string] > (false,["jahidul"])