
$(".btn").click(function () {

    $(".text").text("...loading");

    $.ajax({
        type: "GET",
        url: "https://dog.ceo/api/breeds/list/all",
        success: function(data) {
            $(".text").text(data);
        },
        dataType: "jsonp"
    });

});










