const list = $("#listhere");

const addTodo = () => {
  if ($("#todos").val() != "") {
    let aToDo = $("#todos").val().trim();
    list.append($("<p>").text(aToDo));
    $("#todos").val("");
  }
};

$("#todos").keypress(function (event) {
  if (event.which == 13) {
    addTodo();
  }
});

$("#addbtn").on("click", function () {
  addTodo();
});
