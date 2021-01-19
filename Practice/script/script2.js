// Exercices 1
// let names = ['Olivia','Emma','Ava','Sophia','Isabella','Amelia','Mia','Harper','Emily'];
// let city = ['New York', 'Chicago', 'Los Angeles', 'New York', 'Miami', 'New York', 'Dallas', 'Washington', 'San Francisco'];

// for(let i = 0; i< names.length; i++){
//     if(names[i]==='Mia'){
//         console.log(names[i]);
//     }
// }

// Exercices 2
let users = [
    {name: 'Slave    ',
    city: 'Skopje    ',
    age: 29
    },
    {name: 'Goran    ',
    city: 'Prilep    ',
    age: 35
    },
    {name: 'Mario    ',
    city: 'Stip      ',
    age: 15
    },
    {name: 'Luka     ',
    city: 'Skopje    ',
    age: 22
    },
    {name: 'Dejan    ',
    city: 'Ohrid     ',
    age: 30
    },
    {name: 'Marija   ',
    city: 'Bitola    ',
    age: 22
    },
    {name: 'Tea      ',
    city: 'Prilep    ',
    age: 28
    },
    {name: 'Igor     ',
    city: 'Skopje    ',
    age: 30
    },
    {name: 'Filip    ',
    city: 'Bitola    ',
    age: 20
    },
    {name: 'Darko    ',
    city: 'Skopje    ',
    age: 31
    },
    {name: 'Orce     ',
    city: 'Prilep    ',
    age: 36
    },
    {name: 'Nikola   ',
    city: 'Skopje    ',
    age: 42
    },
    {name: 'Igor     ',
    city: 'Kumanovo  ',
    age: 24
    },
    {name: 'Vlatko   ',
    city: 'Stip      ',
    age: 35
    },
    {name: 'Darko    ',
    city: 'Skopje    ',
    age: 32
    },
    {name: 'Viktor   ',
    city: 'Ohrid     ',
    age: 30
    },
    {name: 'Slave    ',
    city: 'Bitola    ',
    age: 30
    },
    {name: 'Kristijan',
    city: 'Prilep    ',
    age: 29
    }
]

function searchFun(searchInput){
    for(let i = 0; i< users.length; i++){
        if(users[i].name.trim() === searchInput){
            console.log(`Name : ${users[i].name}      City : ${users[i].city}       Age : ${users[i].age}`)
        }else if(users[i].city.trim() === searchInput){
            console.log(`City : ${users[i].city}      Name : ${users[i].name}       Age : ${users[i].age}`)
        }else if(users[i].age === parseInt(searchInput)){
            console.log(`Age : ${users[i].age}        City : ${users[i].city}       Name : ${users[i].name}`)
        }
    }
}
searchInput = prompt(`Search by Name, City or Age :`)
searchFun(searchInput);                                 // -> search objects by ket (name city or age)


// Exercices 3
function order(ageOrder){
    if(ageOrder === '+'){
        for(let i = 0; i < users.length; i++){
            users.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));
            console.log(`Age : ${users[i].age}        City : ${users[i].city}       Name : ${users[i].name}`)
        }
    }else{
        for(let i = 0; i < users.length; i++){
            users.sort((a, b) => parseFloat(b.age) - parseFloat(a.age));
            console.log(`Age : ${users[i].age}        City : ${users[i].city}       Name : ${users[i].name}`)
        }
    }
}
ageOrder = prompt(`Sort by age ascending + descending -`)
order(ageOrder);                                        // -> sort array of objects by key(age)



// Exercices 4
/*
let seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antioni', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for(let i = 0; i < seatingChart.length; i++){
    let row = seatingChart[i];
        for(let j = 0; j < row.length; j++){
            console.log(row[j])
        }
}
*/

// Exercices 5
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];

// for(let i = 0; i < student1Courses.length; i++){
//     for(let j = 0; j < student2Courses.length; j++){
//         if(student1Courses[i] === student2Courses[j]){
//             console.log(student2Courses[j])
//         }
//     }
// }

// let randomArr = [30, 55, 152, 1, 66, 33, 250, 1000, 74, 147, 258, 346, 555, 198, 2, 7, 246, 57, 319, 2, 54, 880];

// for(let i = 0; i < randomArr.length; i++){
//     if(randomArr[i]>100){
//         console.log(randomArr[i]);
//     }
//     // totalArr += randomArr[i]; 
// }
