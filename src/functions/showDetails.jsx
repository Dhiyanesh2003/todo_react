export const showDetails = () => {
    if (document.getElementById("profile-info").style.display == "block") {
        document.getElementById("profile-info").style.display = "none";
    }
    else {
        document.getElementById("profile-info").style.display = "block";
    }
}