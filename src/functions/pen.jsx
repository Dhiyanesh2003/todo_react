import { search } from "./search";

export const pen = () => {
    window.vall = false;
    window.vcom = false;
    window.vpen = true;
    document.getElementById("com").style.color = "green";
    document.getElementById("com").style.backgroundColor = "white";
    document.getElementById("pen").style.color = "white";
    document.getElementById("pen").style.backgroundColor = "green";
    document.getElementById("all").style.color = "green";
    document.getElementById("all").style.backgroundColor = "white";
    search();
}