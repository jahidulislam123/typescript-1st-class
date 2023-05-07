// ekta type jodi onno ekta type er opor dependent hobe tokhon take conditional type bole 
type a1 =string;
type a2 =a1 extends string ? string : null;
// etar mane hocce a1 jodi string hoy tahole eta string notoba eta null 
// a1 er opor a2 dependent 



// 2 nested type conditinal 
type a3 = undefined ;
type a4 = number;
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never ;
// eta if else condition 



type Sheikh = {
    wife1 :string,
    wife2 : string
}


type CheackProperty <T> =T extends {wife1 : string}? true : false;
type CheackWife =CheackProperty<Sheikh>  
// check korbe ei sheikh type a wife2 ace kina thakle true dibe na thakle false dibe



// oporer jinish take ekhon ami generic e cheack korbo 

type Sheikh1 = {
    wife1 :string,
    wife2 : string
}

type A =keyof Sheikh1 ; // wife one and wife two er moddhe ekta union type korbe 
// K extend wife mane hocce wife1 shiek1 er wife one wife2 extends kore
type CheackProperty1 <T,K> =K extends keyof Sheikh1 ? true : false;
type CheackWife1 =CheackProperty1<Sheikh1,"wife1"> ;
// same vabe wife 2 keo extends korte pari  
// check korbe ei sheikh type a wife2 ace kina thakle true dibe na thakle false dibe
// erokom condition er type kore ekta type er opor vitti kore arekta type cheack korbo 



// matha nosto kora example 
 type Bandhubi = "munika "| 'Rachel '| "pheobe";
 type RemoveBandhubi <T> =T extends "Rache1 " ? never : T 
 type CurrenTBandhobi = RemoveBandhubi<Bandhubi> 


 // eta holo Rache1 bandhobi ke remove kore dici



 // matha nosto kora example 
 type Bandhubi1 = "munika "| 'Rachel '| "pheobe";
 type RemoveBandhubi1 <T,K> =T extends K ? never : T 
 type CurrenTBandhobi1 = RemoveBandhubi1<Bandhubi1,'munika'> 


 