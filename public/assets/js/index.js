// tag to append list
const theList = $("#listhere");

let arrayOfToDos = [];

// display active notes
$(".activenotes").on("click", (event) => {
  event.preventDefault();
  $(".currentlist").show();
  $(".displaysavedlist").hide();
});
// display saved notes
$(".savednotes").on("click", (event) => {
  event.preventDefault();
  $(".currentlist").hide();
  $(".displaysavedlist").show();
  console.log("fire in the hole");

  $("#savedlisthere").empty();

  // GET route will go here

  $.ajax("/api/notes", {
    type: "GET",
  }).then(function (result) {
    console.log(result);

    for (let i = 0; i < result.length; i++) {
      let returnedItems = JSON.parse(result[i].List_items);
      console.log(returnedItems);
      $("#savedlisthere").append(
        $("<li>")
          .append($("<span>").text(returnedItems).addClass("textdetails"))
          .attr("data-index", i)
          .css("padding-bottom", "15px")
          .addClass("change")
          .append($("<button>").text("update").addClass("update samebtn"))
          // .append($("<button>").text("save").addClass("save samebtn"))
          .append(
            $("<button>").text("mark complete").addClass("crossoff samebtn")
          )
          .append($("<button>").text("delete").addClass("actualdelete samebtn"))
      );
    }

  });
  //
});


// DELETE route for saved notes
$("#savedlisthere").on("click", (event) => {
  event.preventDefault();

  let element = event.target;

  if (element.matches(".actualdelete") === true) {

      console.log("this will delete the item");

    let index = element.parentElement.getAttribute("data-index");
    const deleteNote = index;
    console.log(deleteNote);
    $.ajax("/api/notes/" + deleteNote, {
      type: "DELETE",
    }).then(function () {
      console.log("note deleted!");
    });

    // arrayOfToDos.splice(index, 1);
    // console.log(arrayOfToDos);
    // theList.empty();
    // addToDo();
  }
});






const runList = () => {
  if ($("#todos").val() != "") {
    let aToDo = $("#todos").val().trim();
    arrayOfToDos.push(aToDo);
    $("#todos").val("");

    addToDo();
  }
};

runList();

// function that creates to dos
const addToDo = () => {
  theList.empty();

  for (i = 0; i < arrayOfToDos.length; i++) {
    let createLi = arrayOfToDos[i];

    theList.append(
      $("<li>")
        .append($("<span>").text(createLi).addClass("textdetails"))
        .attr("data-index", i)
        .css("padding-bottom", "15px")
        .addClass("change")

        // .append($("<button>").text("update").addClass("update samebtn"))
        .append($("<button>").text("save").addClass("save samebtn"))
        // .append(
        //   $("<button>").text("mark complete").addClass("crossoff samebtn")
        // )
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

// create button that deletes items from active list
$("#listhere").on("click", (event) => {
  event.preventDefault();
  let element = event.target;

  if (element.matches(".delete") === true) {
    let index = element.parentElement.getAttribute("data-index");

    // const deleteNote = index;
    // console.log(deleteNote);

    // $.ajax("/api/notes" + deleteNote, {
    //   type: "DELETE",
    // }).then(function () {
    //   console.log("note deleted!");
    // });

    arrayOfToDos.splice(index, 1);
    console.log(arrayOfToDos);
    theList.empty();
    addToDo();
  }
});

$("#listhere").on("click", (event) => {
  event.preventDefault();
  let element = event.target;

  if (element.matches(".save") === true) {
    // console.log("dennis");
    let index = element.parentElement.getAttribute("data-index");

    // grab the element by index and POST it
    let thisNote = JSON.stringify(arrayOfToDos[index]);
    console.log(thisNote);

    const sendNote = {
      readyForDelivery: thisNote,
    };

    $.ajax("/api/notes", {
      type: "POST",
      data: sendNote,
    }).then(function () {
      console.log("note saved!");
    });
  }
});
