function solve() {
   let message = document.getElementById("chat_input");

   let btn = document.getElementById("send");

   btn.addEventListener("click", (e) => {
       let msg = document.createElement("div");

       msg.setAttribute("class", "message my-message");

       msg.innerHTML = message.value;


       let messages = document.getElementById("chat_messages");

       messages.appendChild(msg);

       message.value = "";
   })
}


