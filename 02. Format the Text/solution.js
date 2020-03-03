function solve() {
  let paragraph = document.getElementById("input");

  let sentences = paragraph.innerHTML.split(".");

  let output = document.getElementById("output");

  for (i = 0; i < sentences.length; i += 3){
      let par = document.createElement("p");

      for (j = 0; j < 3; j++){
          if (i+j === sentences.length){
              break;
          }

          if (i+j != sentences.length-1) {
              par.innerHTML += sentences[i + j] + ".";
          }
      }

      output.appendChild(par);
  }
}