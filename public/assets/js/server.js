// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".ndy").on("click", function(event) {
      var id = $(this).data("id");
      
  
      
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("Burger changed");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".ndyy").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        
        name: $("[name=burger]").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New Burger added");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

      
    });

  