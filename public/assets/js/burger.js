$(function() {
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    const newDevouredState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevouredState);
        location.reload();
      }
    );
  });

  $(".new-burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
