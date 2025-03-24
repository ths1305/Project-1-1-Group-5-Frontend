const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Adding the ability to display tasks when typed, and preventing blank answers from being accepted
function addTask(){
    if (inputBox.value === ''){
        alert("Field cannot be blank");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}
// Adding the ability to remove, check, and uncheck tasks
// Tasks are crossed out to signify completion when clicked on, and can be clicked on again to revert to default state
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

