function createArticle() {

	let titleInput = document.getElementById("createTitle");

	let contentInput = document.getElementById("createContent");

	if (titleInput.value != "" && contentInput.value != "") {
        let articles = document.getElementById("articles");

        let article = document.createElement("article");

        let title = document.createElement("h3");

        let content = document.createElement("p");

        title.innerHTML = titleInput.value;

        content.innerHTML = contentInput.value;

        article.appendChild(title);

        article.appendChild(content);

        articles.appendChild(article);
    }

	titleInput.value = "";

	contentInput.value = "";

}