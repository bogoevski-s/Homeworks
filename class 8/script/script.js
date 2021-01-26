$("body").css("backgroundImage", "linear-gradient(to top right, #080366, #d2725a)")
$("body").css("backgroundRepeat", "no-repeat")
$("body").css("backgroundSize", "cover")
$("body").css("backgroundAttachment", "fixed")

let nameOfAnimal = prompt(`Name of the animal`);
let typeOfAnimal = prompt(`Type of animal`);
let broStr = prompt(`What animal says`);

function Animal(name,type){
    this.name = name;
    this.type = type;
    this.speak = function(str){
        return `${this.name} says ${str}`
    }
}
let animals = new Animal(nameOfAnimal,typeOfAnimal);
console.log(animals);
console.log(animals.speak(broStr))
