// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".create").on("click", function (event) {
        event.preventDefault();
        console.log("Burger changed");
        var id = $(this).data("id");
        console.log(id)

        // Send the PUT request.
      
    });

    $("#new-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();


        var newBurger = {


            name: $("[name=burger]").val().trim()
        };
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger added");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });


});

// $.ajax({
//     method: "PUT",
//     url: "/api/burger/" + id
// }).then(
//     function (data) {
//         console.log("Burger added", data);
//         // Reload the page to get the updated list
//         location.reload();
//     }
// );