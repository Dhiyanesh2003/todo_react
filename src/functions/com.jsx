import { search } from "./search";

export const com = () => {
    window.vall = false;
    window.vcom = true;
    window.vpen = false;
    document.getElementById("com").style.color = "white";
    document.getElementById("com").style.backgroundColor = "green";
    document.getElementById("pen").style.color = "green";
    document.getElementById("pen").style.backgroundColor = "white";
    document.getElementById("all").style.color = "green";
    document.getElementById("all").style.backgroundColor = "white";
    search();
}