let url = "https://fakerapi.it/api/v1/books?_quantity=10";

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    printData(data);
});

function printData(apiData) {
    let output = document.getElementById("main");
    let outData = apiData.data;
    for (let i = 0; i < outData.length; i++){
        output.appendChild(printDataElem(outData[i]));
    }        
}

function printDataElem(data){
    let output = document.createElement("div");
    output.className = "card";

    let cImage = document.createElement("img");
    cImage.className = "card__image"
    cImage.src = "https://http.cat/images/20" + data.id + ".jpg";
    output.appendChild(cImage);    

    let cContainer = document.createElement("div");
    cContainer.className = "card__container";
    output.appendChild(cContainer);

    let cTitle = document.createElement("h3");
    cTitle.className = "card__title";
    cTitle.innerText = data.title;
    cContainer.appendChild(cTitle);

    let cAuthor = document.createElement("p");
    cAuthor.className = "card__author";
    cAuthor.innerText = data.author;
    cContainer.appendChild(cAuthor);

    let cDescription = document.createElement("p");
    cDescription.className = "card__descr";
    cDescription.innerText = data.description;
    cContainer.appendChild(cDescription);

    let cFooter = document.createElement("div");
    cFooter.className = "card__footer";
    cContainer.appendChild(cFooter);

    let cGenre = document.createElement("p");
    cGenre.classList = "card__genre";
    cGenre.innerText = data.genre;
    cFooter.appendChild(cGenre);

    let cIsbn = document.createElement("p");
    cIsbn.classList = "card__isbn";
    cIsbn.innerText = data.isbn;
    cFooter.appendChild(cIsbn);

    let cPublished = document.createElement("p");
    cPublished.classList = "card__published";
    cPublished.innerText = data.published;
    cFooter.appendChild(cPublished);

    let cPublisher = document.createElement("p");
    cPublisher.classList = "card__publisher";
    cPublisher.innerText = data.publisher;
    cFooter.appendChild(cPublisher);

    return output;
}