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
    
    let cID = document.createElement("p");
    cID.className = "card__id";
    cID.innerText = data.id;

    let cTitle = document.createElement("h3");
    cTitle.className = "card__title";
    cTitle.innerText = data.title;

    let cAuthor = document.createElement("p");
    cAuthor.classList = "card__author";
    cAuthor.innerText = data.author;

    let cGenre = document.createElement("p");
    cGenre.classList = "card__genre";
    cGenre.innerText = data.genre;

    let cDescription = document.createElement("p");
    cDescription.classList = "card__descr";
    cDescription.innerText = data.description;

    let cIsbn = document.createElement("p");
    cIsbn.classList = "card__isbn";
    cIsbn.innerText = data.isbn;

    let cPublished = document.createElement("p");
    cPublished.classList = "card__published";
    cPublished.innerText = data.published;

    let cPublisher = document.createElement("p");
    cPublisher.classList = "card__publisher";
    cPublisher.innerText = data.publisher;

    output.appendChild(cID);
    output.appendChild(cTitle);
    output.appendChild(cAuthor);
    output.appendChild(cGenre);
    output.appendChild(cDescription);
    output.appendChild(cIsbn);
    output.appendChild(cPublished);
    output.appendChild(cPublisher);

    return output;
}