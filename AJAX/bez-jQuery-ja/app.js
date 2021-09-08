
document.querySelector(".btn").addEventListener("click", loadText);

function loadText(e) {

    const paragraph = document.querySelector(".text");

    let request = new XMLHttpRequest();

    request.open("GET", "sample.txt", true);

    // optional

    request.onprogress = function() {
        paragraph.textContent = "...loading";
    }

    // optional

    request.onerror = function() {
        paragraph.textContent = "ERROR";
    }

    request.onload = function() {
        if (this.status == 200) {
            paragraph.textContent = this.responseText;
        } else if (this.status == 404) {
            paragraph.textContent = "Not found";
        }
    }

    // request.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         paragraph.textContent = this.responseText;
    //     } else {
    //         paragraph.textContent = "...loading";
    //     }
    // }

    request.send();

}

// $(".btn").click(function(){
//     $.ajax({
//         type: "GET",
//         url: "sample.txt",
//         success: function(data) {
//             const paragraph = $(".text");
//             paragraph.text(data);
//         },
//         datatype: "text"
//     });
// });




















