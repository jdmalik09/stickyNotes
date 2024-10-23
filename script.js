let btn = document.getElementById("btn-1");
let clear = document.getElementById("btn-2")
let text = document.getElementById("text_area");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
let message = document.getElementById("message");



function addNotes() {

    if (text.value === "") {
        alert("Please enter some text in sticky notes");
        return;
    }


    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    
    div.appendChild(p);
    div.appendChild(cross_btn);

    div.style.width = "180px"; // Adjust as needed
    div.style.height = "100px"; // Adjust as needed

    cross_btn.innerText = "X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;

    notes_container.appendChild(div);

    text.value ="";

    cross_btn.addEventListener("click", function(){
        notes_container.removeChild(div);
        isEmpty();
    });

    clear.addEventListener("click", function(){
        notes_container.innerHTML="";
        isEmpty();
    });
    isEmpty();
    
}

btn.addEventListener('click', addNotes);


function isEmpty(){
    if(notes_container.childElementCount === 0){
        message.innerText = "No sticky notes found";
    } else {
        message.innerText = "";
    }
}