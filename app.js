let btn = document.getElementById("addTask");
let ul = document.getElementById("taskList");
let inp = document.getElementById("newTask");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
    }
});
