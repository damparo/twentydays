// tag to append list
const list = $("#listhere");

let arrayOfToDos = [];

// function that creates to dos
const addToDo = () => {
  if ($("#todos").val() != "") {
    list.empty();
    let aToDo = $("#todos").val().trim();
    arrayOfToDos.push(aToDo);

    $("#todos").val("");

    for (i = 0; i < arrayOfToDos.length; i++) {
      let createLi = arrayOfToDos[i];

      list.append(
        $("<li>")
          .attr("data-index", i)
          .css("padding-bottom", "15px")
          .addClass("change")
          .append(
            $("<input>")
              .val(createLi)
              // .prop("disabled", true)
              .addClass("inputchange")
              .attr("data-update", i)
          )
          .append($("<button>").text("update").addClass("update"))
          .append($("<button>").text("save").addClass("save"))
          .append($("<button>").text("mark complete").addClass("crossoff"))
          .append($("<button>").text("delete").addClass("delete"))
      );
    }

    // $("#todos").val("");
  }
};

// this function allows the enables the enter key for the input field
$("#todos").keypress(function (event) {
  if (event.which == 13) {
    addToDo();
  }
});

// runs the addToDo function via the add button
$("#addbtn").on("click", function () {
  addToDo();
});

// create button that deletes items

list.on("click", function (event) {
  let element = event.target;

  if (element.matches(".delete") === true) {
    // console.log("dennis");
    let index = element.parentElement.getAttribute("data-index");
    console.log(index);
    console.log(arrayOfToDos);
    arrayOfToDos.splice(index, 1);

    addToDo();
  }
});

// create button that strikethroughs completed todo

// $("#listhere").on("click", ".update", function (event) {
//   event.preventDefault();
//   console.log("please work dammit");

//   // let updateInput = $(this).attr("data-update");

//   $("input[data-update]").prop("disabled", false);

//   console.log("sol")

// // $("#listhere").on("click", ".save", function (event) {
// //   event.preventDefault();
// //   $(".modifyEntry").prop("disabled", true);
// // });

//   // let inputClass = $(this).attr("class");

//   // $(inputClass).prop("disabled", false);

//   // let element = event.target;
//   // if (element.matches("button") === true) {
//     // Get its data-index value and remove
//     // let index = element.parentElement.getAttribute("data-index");
//     // $().prop("disabled", false);

//   // }

//   // let updateInput = $(this).attr("data-update");
//   // let forClass = '"' + "." + updateInput + '"';
//   // console.log(forClass);

//   //   if ( updateInput)
//   //   console.log(updateInput);
//   //   let justTheValue = ""+ updateInput + "";
//   //   console.log(justTheValue);
//   // $("input").prop("disabled", false);
// });

// $("#listhere").on("click", ".save", function (event) {
//   event.preventDefault();
//   $(".modifyEntry").prop("disabled", true);
// });
