// Exercise 1

// let todos =[];
// let input = prompt("TODO LIST \n\n What would you like to do?\n\n1.Add\n2.List\n3.Quit");
// function todo (input){
// 	while(input.toLowerCase() !== "quit" || parseInt(input) === 3){
// 		if (input.toLowerCase() === "list" || parseInt(input) === 2) {
// 			alert(todos);
		
// 		} else if (input.toLowerCase() === "add" || parseInt(input) === 1){
// 		let newtodo = prompt("Enter new todo");
// 				todos.push(newtodo);
// 	}
// 	input = prompt("TODO LIST \n\n What would you like to do?\n\n1.Add\n2.List\n3.Quit");
// 	}
// 	alert("OK, YOU QUIT THE APP");
// }
// todo(input);


// Exercise 2 

let movies = [
	{
		title:"Irishman",
		year:2019,
		rating: 5,
		watched: true
	},
	{
		title:"Ford vs Ferarri",
		year:2019,
		rating: 5,
		watched: true
	},
	{
		title:"RED",
		year:2016,
		rating: 3,
		watched: false
	},
	{
		title:"The Fate of the Furious",
		year:2017,
		rating: 3.5,
		watched: false
	}	
]

movies.forEach(function(movies){
let result = "You have ";
	if(movies.watched){
	result += "been watch ";
	} else {
		result += "not been watch ";
	}
	result += "  " + movies.title + "  ";
	result += "  " + movies.year + "  ";
	result += "  " + movies.rating + " - stars";
	console.log(result);
});
    

// Exercise 3 Finding the owner pets and create new arr with firstName and petName

let owners = [
    {Id: 1, firstName:"Alek", lastName:"Aleksovski", age:19},
    {Id: 2, firstName:"Tony", lastName:"Trajkov", age:20},
    {Id: 3, firstName:"Dejan", lastName:"Blazevski", age:23}
] 
let pets = [
    {petId:1, ownerId:1, petName:"Dog1"},
    {petId:2, ownerId:1, petName:"Cat1"},
    {petId:3, ownerId:2, petName:"Cat2"},
    {petId:4, ownerId:3, petName:"Dog3"}
]
let ownersPets = [];

function getOwnersPets(){
    for(i=0; i<pets.length; i++){
        for(j=0; j<owners.length; j++){
            if(owners[j].Id===pets[i].ownerId){
                ownersPets = owners[j].firstName +' '+ pets[i].petName;
                // console.log(owners[j].firstName +' '+ pets[i].petName);
                console.log(ownersPets);
            }           
        }
    }       
}
        getOwnersPets();



// Exercise 4 Finding closest number to 100  

const num = 100;
function highNum(x, y){
    if (x && y > num){
        if (y<x && y && x >num){
            console.log(y);
        }
        if(y>x && y && x > num){
            console.log(x);
        }
    }
        
    if (x && y < num){
        if (y>x && y && x <num){
            console.log(y);
        }
        if(y<x && y && x < num){
            console.log(x);
        }
    }
        
    if (x < num && y>num){
        if (y>x && y > num){
            if ((num - x)< (y-num)){
                console.log(x);
            }
            else {
                console.log(y);
             }
        }
    }
    if (x > num && y<num){
        if(y<x && y < num){
            if ((num - y)< (x-num)){
                console.log(y);
            }
            else {
                console.log(x);
            }
        }
    }
}
        highNum(199, 60);