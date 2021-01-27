$("body").css("background-color", "lightgray");
$("body").css("backgroundRepeat", "no-repeat");
$("body").css("backgroundSize", "cover");
$("body").css("backgroundAttachment", "fixed");
$("body").css("fontFamily", "Arial");
$(".mainDiv").css("textAlign", "center");

let nameUser = $("#name");
let button = $("#btn");

button.click(function(){
    let printName = nameUser.val()
    $("body").append(`<h1>Hello there ${printName}!</h1>`);
    $("body").css("backgroundImage", "url(https://images.unsplash.com/photo-1542261777448-23d2a287091c?)").css("textAlign", "center");
    $("body").addClass(".mainDiv");
    
})