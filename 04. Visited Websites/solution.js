function solve() {
    let links = document.getElementsByTagName("a");

    for (let link of links) {
        link.addEventListener("click", (e) => {

            let par = link.nextElementSibling;

            let num = Number(par.innerHTML.match(/\d+/));

            par.innerHTML = `visited ${num + 1} times`
        })
    }

}