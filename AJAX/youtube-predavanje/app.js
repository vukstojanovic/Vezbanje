
// fetch verzija

// $("#btn").click(function () {

//     async function getData() {

//         const data = await fetch("https://learnwebcode.github.io/json-example/animals-1.json");

//         console.log(data);
    
//         const result = await data.json();

//         return result;
    
//     }
    
//     getData()
//     .then(res => {
//         console.log(res);
//         $("#animal-info").text(JSON.stringify(res));
//     })
//     .catch(err => console.log(err));

// });


// ajax verzija

$("#btn").click(function() {
    $.ajax({
        url: "https://learnwebcode.github.io/json-example/animals-1.json",
        success: function(result) {
            $("#animal-info").text(JSON.stringify(result));
        }
    });
});






