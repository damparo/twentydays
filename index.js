const list = $("#listhere");

const addTodo = () => {
  if ($("#todos").val() != "") {
    let aToDo = $("#todos").val().trim();
    list.append($("<li>").append($("<input>").val(aToDo).prop("disabled", true)).append($("<button>").text("modify")).append($("<button>").text("save")));
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
