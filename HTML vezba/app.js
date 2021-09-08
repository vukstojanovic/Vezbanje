
const target = document.getElementById("target");
const source = document.getElementById("source");

// source.addEventListener("drag", drag);
// source.addEventListener("dragend", dragEnd);

target.addEventListener("drop", dropElement);
target.addEventListener("dragover", allowDrop);

function allowDrop(e) {
    e.preventDefault();
}

function dropElement(e) {

    // e.preventDefault();
    const appendEl = e.dataTransfer.getData("text");
    e.target.appendChild(source);

}







