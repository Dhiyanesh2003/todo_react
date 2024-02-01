import { search } from "./search";

export const all = () => {
    window.vall = true;
    window.vcom = false;
    window.vpen = false;
    document.getElementById("com").style.color = "green";
    document.getElementById("com").style.backgroundColor = "white";
    document.getElementById("pen").style.color = "green";
    document.getElementById("pen").style.backgroundColor = "white";
    document.getElementById("all").style.color = "white";
    document.getElementById("all").style.backgroundColor = "green";
    search();
}