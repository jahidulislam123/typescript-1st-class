// class create korbo 
class Animal {
    // animal class er moddhe ei ei properties gula thakbe 


    // by default vabe public thake ami caile samne public likhteo pari nao likhte pari 

   public name:string;
   public species:string;
   public sound : string;
    // class likhle evabe constructor declare korte hoy
    // opore properties likhlam abar constructor e o likhlam eke paremater properties  bole 
    constructor(name:string, species:string, sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound;
    }

    // Class e kono function likhle eke bola hoy method 
    // But arrow function use korbo na normal function use korbo 
    public makesound(){
        console.log(`th ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('german shepard','dog','ghe2w ghew')
dog.makesound();

const cat =new Animal("pat","dammay","lalu");
cat.makesound();


// ekhon ami cat er nam change korte parbo 
cat.name="pappai"





// ami class er vitore je properties gula use korci segula ekbar name abar constructior er vitore this.name evabe likhci
// ekhon eta ami peremeter poperties er maddhome korte pari 
// class create korbo 
class Animal2 {
    // animal class er moddhe ei ei properties gula thakbe 


    // by default vabe public thake ami caile samne public likhteo pari nao likhte pari 

//    public name:string;
//    public species:string;
//    public sound : string;
    // class likhle evabe constructor declare korte hoy
    // opore properties likhlam abar constructor e o likhlam eke paremater properties  bole 
    constructor(public name:string, public species:string,public sound:string){
        // this.name=name;
        // this.species=species;
        // this.sound=sound;
    }

    // Class e kono function likhle eke bola hoy method 
    // But arrow function use korbo na normal function use korbo 
    public makesound(){
        console.log(`th ${this.name} says ${this.sound}`);
    }
}

const dog2 = new Animal2('german shepard','dog','ghe2w ghew')
dog.makesound();

const cat2 =new Animal2("pat","dammay","lalu");
cat.makesound();


// ekhon ami cat er nam change korte parbo 
cat.name="pappai"


// amake sudo construcor er vitore public likhe dilei hobe ar kicu korte hobe na 


