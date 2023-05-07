// access modifire hocce access take modify kora 
class BankAccount1 {
    id : number;
    name : string;
    private _balance : number;
    



    // private dile only claass er vitore use kora lage
    constructor(id:number,name:string,_balance:number){
        this._balance=_balance;
        this.id=id;
        this.name=name;

    }
    // private properti ke access korar jonno getter and setter use korbo 
    get blalance():number{
        return this._balance;
     }

    // getBalance():number{ // sudho matro return korlei amra type dibo 
    //     return this._balance;

    // }

    set deposite(amount : number){
        this._balance = this._balance+amount ;
    }
    // deposite(amount :number){  // 
    //     this._balance = this._balance+amount;
    // }
}




const myAccount1 = new BankAccount(444,'persian',23);
// myAccount.balance=0;
// manush evabe balance change kroe dite pare 
// tai ami private kore dibo 
console.log(myAccount);

console.log(myAccount1.balance);
myAccount1.deposite=23;
console.log(myAccount1.balance)