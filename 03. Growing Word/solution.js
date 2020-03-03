function growingWord() {
    let exerc = document.getElementById("exercise");

    let parag = exerc.lastElementChild;

    if (!parag.hasAttribute("style")){
        parag.setAttribute("style", "font-size: 2px; color: blue")
    }

    else{
        let style = parag.getAttribute("style");

        let fontSize = Number(style.match(/\d+/));

        let newColor;

        if (style.includes("blue")){
            newColor = "green"
        }

        else if (style.includes("green")){
            newColor = "red"
        }

        else if (style.includes("red")){
            newColor = "blue"
        }

        let newSize = 2*fontSize;

        parag.setAttribute("style", `font-size: ${newSize}px; color: ${newColor}`)
    }
}