type NoobDeveloper = {
    Name : string;

};
type JuniorDeveloper ={
    name : string;
    expertise : string,
    expericence : number
};

const NewDeveloper : NoobDeveloper | JuniorDeveloper ={
    name : 'MOZNU MIA',
    expertise : 'javascript ',
    expericence : 1,

}


// intersection er jonno 

type NoobDeveloper1 = {
    Name : string;

};
type JuniorDeveloper1 = NoobDeveloper & {
    
    expertise : string,
    expericence : number
};

const NewDeveloper1 : NoobDeveloper | JuniorDeveloper ={
    name : 'MOZNU MIA',
    expertise : 'javascript ',
    expericence : 1,

}




// intersection er arekta utdahoron 
type NextLevelDveloper  = JuniorDeveloper & {
    leadershipExperiences : number;
    level : 'mid'| 'jumior'|'senior';
}

const developer11 : NextLevelDveloper = {
    name : "jahid",
    expertise :"typescript ",
    expericence : 2 , 
    leadershipExperiences: 1,
    level : 'mid' 
}






//enum 
// enum Lelvel{
//     junior='junior',
//     mid='mid',
//     senior='senior'
// }


// // intersection er arekta utdahoron
// type NextLevelDveloper  = JuniorDeveloper & {
//     leadershipExperiences : number;
//     Lelvel : Lelvel;
// }


// const developer11 : NextLevelDveloper = {
//     name : "jahid",
//     expertise :"typescript ",
//     expericence : 2 ,
//     leadershipExperiences: 1,
//     Lelvel : Lelvel.mid
// }
