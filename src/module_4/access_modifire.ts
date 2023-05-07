// access modifire hocce access take modify kora 
class BankAccount {
    id : number;
    name : string;
    private _balance : number;
    // private dile only claass er vitore use kora lage
    constructor(id:number,name:string,_balance:number){
        this._balance=_balance;
        this.id=id;
        this.name=name;

    }
    gerBalance(){
        console.log(`My balance is ${this._balance}`)// sudho class er vitorei access  korte parbo 

    }
    deposite(amount :number){
        this._balance = this._balance+amount;
    }
}




const myAccount = new BankAccount(444,'persian',23);
// myAccount.balance=0;
// manush evabe balance change kroe dite pare 
// tai ami private kore dibo 
console.log(myAccount);