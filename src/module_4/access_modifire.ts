// access modifire hocce access take modify kora 
class BankAccount {
    id : number;
    name : string;
    balance : number;
    constructor(id:number,name:string,balance:number){
        this.balance=balance;
        this.id=id;
        this.name=name;

    }
}


const myAccount = new BankAccount(444,'persian',23);
console.log(myAccount);