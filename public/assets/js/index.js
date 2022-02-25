// tag to append list
const theList = $("#listhere");

let arrayOfToDos = [];

const runList = ()=>{
  if ($("#todos").val() != "") {
    
      let aToDo = $("#todos").val().trim();
      arrayOfToDos.push(aToDo);
      $("#todos").val("");

      addToDo();
  
  }}

runList();

// function that creates to dos
const addToDo = () => {
  theList.empty();

    for (i = 0; i < arrayOfToDos.length; i++) {
      let createLi = arrayOfToDos[i];

      theList.append(
        $("<li>")
          .append(
            $("<span>").text(createLi).addClass("textdetails")
          )
          .attr("data-index", i)
          .css("padding-bottom", "15px")
          .addClass("change")
         
          .append($("<button>").text("update").addClass("update samebtn"))
          .append($("<button>").text("save").addClass("save samebtn"))
          .append($("<button>").text("mark complete").addClass("crossoff samebtn"))
          .append($("<button>").text("delete").addClass("delete samebtn"))
      );
    }


  
};

// this function allows the enables the enter key for the input field
$("#todos").keypress(function (event) {
  if (event.which == 13) {
    runList();
  }
});

// runs the addToDo function via the add button
$("#addbtn").on("click", function () {
  runList();
});

// create button that deletes items
$('#listhere').on('click', event =>{
  event.preventDefault();
  console.log('this is the save btn');
  let element = event.target;

  if (element.matches(".delete") === true) {
    // console.log("dennis");
    let index = element.parentElement.getAttribute("data-index");
    console.log(index);
    arrayOfToDos.splice(index, 1);
    // index.remove();
    console.log(arrayOfToDos);
    theList.empty();
    addToDo();
  }


});









