import { search } from "./search";

export const addTask = () => {
    if (!localStorage.getItem("count")) {
        localStorage.setItem("count", 0);
    }
    var name = document.getElementById("name").value;
    if (name) {
        let id = parseInt(localStorage.getItem("count")) + 1;
        localStorage.setItem(id, name)
        localStorage.setItem("count", id);
        document.getElementById("form").style.display = "none";
    }
    else {
        alert("Enter the task !")
    }
    search();
};