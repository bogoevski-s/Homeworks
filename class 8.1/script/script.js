$("body").css("backgroundImage", "linear-gradient(to top right, #626262, #68006c, #5ad2c3)");
$("body").css("backgroundRepeat", "no-repeat");
$("body").css("backgroundSize", "cover");
$("body").css("backgroundAttachment", "fixed");
$("body").css("fontFamily", "Arial");
$("label").css("color","white");
$("label").css("margin","5px");
$("input").css("marginRight","35px");
$("#btn").css("marginLeft","25px");

let button = $("#btn");
let h1 = $("#header")
h1.css("color","aliceblue");
h1.css("textAlign", "center");
h1.css("margin", "70px");


button.click(function(){
    let readCheck = $('#readStatus:checked').val();
    let bookName = $("#book").val();
    let bookAuthor = $("#author").val();
    if(bookName === ""){
        h1.text("Please enter book and author");
        h1.css("color","#FF9A9A")
        return;
    }else if(readCheck === "read"){
        readCheck = true;
    }else{
        readCheck = false;
    }
    let books = new Reading(bookName, bookAuthor, readCheck);
    h1.text(books.status());
})

function Reading(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.status = function(){
        if(readingStatus){
            return `Already read "${this.title}" by ${this.author}`
        }else{
            return `You still need to read "${this.title}" by ${this.author}`
        }
    }
}


