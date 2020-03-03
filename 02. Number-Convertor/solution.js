function solve() {
    let to = document.getElementById("selectMenuTo");

    let optionBinary = document.createElement("option");

    optionBinary.setAttribute("value", "binary");

    optionBinary.innerHTML = "Binary";

    to.appendChild(optionBinary);

    let optionHexa = document.createElement("option");

    optionHexa.setAttribute("value", "hexadecimal");

    optionHexa.innerHTML = "Hexadecimal";

    to.appendChild(optionHexa);

    let btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click", (e) => {
        let input = document.getElementById("input");

        let num = input.value;

        let result;

        let formula = document.getElementById("selectMenuTo")

        if (formula.value === "binary"){
            result = (num>>>0).toString(2);
        }

        else if (formula.value === "hexadecimal"){
            result = (num >>> 0).toString(16).toUpperCase();
        }

        let res = document.getElementById("result");

        res.value = result;
    })
}