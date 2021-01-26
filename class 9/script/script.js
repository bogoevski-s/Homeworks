$("body").css("backgroundImage", "linear-gradient(to top right, #4b4b4b, #7d5782, #902121)");
$("body").css("backgroundRepeat", "no-repeat");
$("body").css("backgroundSize", "cover");
$("body").css("backgroundAttachment", "fixed");
$("body").css("fontFamily", "Arial");
$("label").css("color", "white");
$("label").css("margin", "5px");
$("input").css("marginRight", "35px");
$("#btn1").css("marginLeft", "25px");

let text = $("#textInput");
let color = $("#color");
let button = $("#btn1");
let colorsArr = ["red", "blue", "green", "yellow", "white", "black", "orange", "magenta", "lime", "pink", "purple", "violet", "turquoise", "gold", "aqua", "brown", "teal", "coral", "navy"];

button.click(function () {
    let textValue = text.val();
    let colorValue = color.val();
    if (colorValue === '' || textValue === "") {
        $("body").append(`<h3>Wrong color or empty text field!!!</h3>`).css("color", "red");
        return;
    }
    if(colorsArr.indexOf(colorValue)> -1){
        let newH3 = $("body").append(`<h3>${textValue} in ${colorValue} color</h3>`);
        newH3.css("color", colorValue);
    }else{
            $("body").append(`<h3>Color "${colorValue}" does not exist in our library</h3>`).css("color", "lightcoral");
    }

})