

const list = $("#listhere");


$("#addbtn").on("click", function(){

if ( $("#todos").val() != "") {
    
let aToDo = $("#todos").val().trim();

console.log(aToDo);

let createToDo = $("<p>");

createToDo.text(aToDo);

list.append(createToDo);

$("#todos").val("");

}







})
