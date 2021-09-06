
// $(".btn").click(function () {

//     $(".text").text("...loading");

//     $.ajax({
//         type: "GET",
//         url: "https://learnwebcode.github.io/json-example/animals-1.json",
//         success: function(data) {
//             $(".text").text(JSON.stringify(data));
//         },
//         datatype: "jsonp"
//     });

// });


$(".btn").click(function () {

    $(".text").text("...loading");

    $.ajax({
        type: "GET",
        data: {
            q: "dog",
            restrict_sr: true
        },
        url: "https://www.reddit.com/r/aww/search.json",
        success: function(result) {
            $(".text").text("");
            result.data.children.forEach(item => {
                $(".text").append(`<img src="${item.data.thumbnail}" alt=""/>`);
            });
        },
        datatype: "jsonp"
    });

});




