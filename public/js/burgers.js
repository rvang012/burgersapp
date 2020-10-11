$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
      var newBurgers = {
      name: $("#yourburger [name=burger_name]").val().trim(),
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgers
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurgers
  }).then(
    function() {
      console.log("create new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );

$(".delete-burger").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted burgers", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
