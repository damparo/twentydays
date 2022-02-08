// tag to append list
const list = $("#listhere");

// function that creates to dos
const addToDo = () => {
  if ($("#todos").val() != "") {
    let aToDo = $("#todos").val().trim();
    list.append(
      $("<li>")
        .css("padding-bottom", "15px")
        .append(
          $("<input>").val(aToDo).prop("disabled", true).addClass(aToDo)
        )
        .append(
          $("<button>")
            .text("update")
            .addClass("update")
            .attr("data-update", aToDo)
        )
        .append(
          $("<button>")
            .text("save")
            .addClass("save")
            .addClass("save")
            .attr("data-save", aToDo)
        )
    );

    $("#todos").val("");
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

// create function that targets either the modify or save btn
$("#listhere").on("click", ".update", function (event) {
  event.preventDefault();
  let updateInput = $(this).attr("data-update");
  let forClass = '"' + "." + updateInput + '"';
  console.log(forClass);




//   if ( updateInput)
//   console.log(updateInput);
//   let justTheValue = ""+ updateInput + "";
//   console.log(justTheValue);
  $(forClass).prop("disabled", false);
});

// $("#listhere").on("click", ".save", function (event) {
//   event.preventDefault();
//   $(".modifyEntry").prop("disabled", true);
// });
