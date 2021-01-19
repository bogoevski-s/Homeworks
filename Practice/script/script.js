for(let i = 0; i < 10; i+=2){
    console.log(i);
}
for(let j = 20; j >= 0; j-=2){
    console.log(j);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for(i=0; i<people.length; i++){
    console.log(people[i].toUpperCase(people));
} 


/*
for(let i = 0; i <= 10; i++){
    console.log(`i is ${i}`);
        for(let j = 0; j <= 4; j++){
            console.log(`       j is:    ${j}`)
        }
}

*/
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