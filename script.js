function switchMode() {
    let moon = document.getElementById("theme");
    if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "#091921";
        document.body.style.color = "#fff";
    }
    else {
        moon.className="moon";
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
}