class Media {
    constructor(image, title, author, genre, publisher, short, rating) {  // wenn ich eine id vergeben möchte . in den constructor id eingeben. 
        //this.id = id;  für das beispiel mit der id vergabe. müsste man dann auch bei new media an erster stelle immer eine id vergeben und diese dann aufrufen. 
        this.image = image;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
        this.short = short;
        this.rating = rating;
    }
};

//MediaData (Objects are stored in an Array) - beispiel echt für die id vergabe für modal - diese benötigt eine ID. 
var books = [

    new Media("img/woodwalkers.png", "Woodwalkers", "Katja Brandis", "Belletristik", "Bild", "Auf den ersten Blick sieht Carag aus wie ein normaler Junge. Doch hinter seinen leuchtenden Augen verbirgt sich ein Geheimnis: Carag ist ein Gestaltwandler. Aufgewachsen als Berglöwe in den Wäldern lebt er erst seit Kurzem in der Menschenwelt. Das neue Leben ist für ihn so fremd wie faszinierend.", "5"),
    new Media("img/modesty1.png", "Modesty Blaise", "Peter O'Donnell", "Mystery", "Titan Books", "Modesty Blaise is a British comic strip featuring a fictional character of the same name, created by author Peter O'Donnell and illustrator Jim Holdaway in 1963. The strip follows Modesty Blaise, an exceptional young woman with many talents and a criminal past, and her trusty sidekick Willie Garvin.", "4"),
];

var dvds = [

    new Media("img/citylights_image.png", "City lights", "Charlie Chaplin", "Romantic Comedy", "United Artists", "City Lights is a 1931 American pre-Code silent romantic comedy film written, produced, directed by and starring Charlie Chaplin. The story follows the misadventures of Chaplin's Tramp as he falls in love with a blind girl (Virginia Cherrill) and develops a turbulent friendship with an alcoholic millionaire (Harry Myers).", "3"),
    new Media("img/Lawrence_of_arabia.png", "Lawrence of Arabia", "T.E.Lawrence", "Historical Drama", "Columbia Pictures", "Lawrence of Arabia is a 1962 epic historical drama film based on the life of T. E. Lawrence. It was directed by David Lean and produced by Sam Spiegel through his British company Horizon Pictures, with the screenplay by Robert Bolt and Michael Wilson. The film stars Peter O'Toole in the title role. It is widely considered one of the greatest and most influential films in the history of cinema.", "2"),
];

var cds = [

    new Media("img/Bob_Dylan_-_Dylan_(1973_album).png", "Dylan", "Bob Dylan", "Rock", "Columbia Records", "Dylan is the 13th studio album by American singer-songwriter Bob Dylan, released on November 19, 1973 by Columbia Records. Compiled and issued by the label with no input from Dylan himself, it contains no original Dylan songs, the material consisting of two outtakes from Self Portrait and another seven from New Morning. It followed the artist's departure from Columbia for Asylum Records, and the announcement of his first major tour since 1966.", "1"),
    new Media("img/sade-diamond-life.png", "Diamond Life", "Sade", "Smooth Soul", "Epic", "Diamond Life is the debut studio album by English band Sade. It was first released in the United Kingdom on 16 July 1984 by Epic Records and in the United States on 27 February 1985 by Portrait Records. Diamond Life went on to sell over six million copies worldwide, becoming one of the top-selling debut recordings of the '80s and the best-selling debut by a British female vocalist.", "6"),
];

var comics = [

    new Media("img/fondation-asimov.png", "Foundation", "Isaac Asimov", "Fantasy Science Fiction", "Heyne", "Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire.", "7"),
    new Media("img/Sandman.png", "The Sandman", "Neil Gainman", "Fantasy", "Vertigo", "The Sandman is a comic book series written by Neil Gaiman and published by DC Comics.   It tells the story of Dream of the Endless, who rules over the world of dreams. The original series ran for 75 issues from January 1989 to March 1996. The series is famous for Gaiman's trademark use of anthropomorphic personification of various metaphysical entities, while also blending mythology and history in its horror setting within the DC Universe.", "8"),
];


//Getting the elements Id's from HTML

var allBooks = document.getElementById("books");
var allDvds = document.getElementById("dvds");
var allCds = document.getElementById("cds");
var allComics = document.getElementById("comics");


//Loop for Books
for (var i = 0; i < books.length; i++) {
    allBooks.innerHTML +=
        '<div class="card">' +
        '<img class="card-img-top" src="' + books[i].image + '">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' + books[i].title + '</h4>' +
        '<p class="card-text">' + "Author: " + books[i].author + '<br>' +
        '<p class="card-text">' + "Genre: " + books[i].genre + '<br>' +
        '<p class="card-text">' + "Rating: " + books[i].rating + '<br>' +
        '</p>' + '</p>' + '</p>' +
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + books[i].rating + '">' + "More Information" + '</button>' +
        '<div class="modal fade" id="' + books[i].rating + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel">' + books[i].title + '</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' + books[i].short + 
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    '</div>' + '</div>';
};


//Loop for Dvds
for (var i = 0; i < dvds.length; i++) {
    allDvds.innerHTML +=
        '<div class="card">' +
        '<img class="card-img-top" src="' + dvds[i].image + '">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' + dvds[i].title + '</h4>' +
        '<p class="card-text">' + "Author: " + dvds[i].author + '<br>' +
        '<p class="card-text">' + "Genre: " + dvds[i].genre + '<br>' +
        '<p class="card-text">' + "Rating: " + dvds[i].rating + '<br>' +
        '</p>' + '</p>' + '</p>' +
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + dvds[i].rating + '">' + "More Information" + '</button>' +
        '<div class="modal fade" id="' + dvds[i].rating + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel">' + dvds[i].title + '</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' + dvds[i].short + 
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    '</div>' + '</div>';
};


//Loop for CDs
for (var i = 0; i < cds.length; i++) {
    allCds.innerHTML += '<div class="card">' +
        '<img class="card-img-top" src="' + cds[i].image + '">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' + cds[i].title + '</h4>' +
        '<p class="card-text">' + "Author: " + cds[i].author + '<br>' +
        '<p class="card-text">' + "Genre: " + cds[i].genre + '<br>' +
        '<p class="card-text">' + "Rating: " + cds[i].rating + '<br>' +
        '</p>' + '</p>' + '</p>' +
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + cds[i].rating + '">' + "More Information" + '</button>' +
        '<div class="modal fade" id="' + cds[i].rating + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel">' + cds[i].title + '</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' + cds[i].short + 
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    '</div>' + '</div>';
};
//Loop for Comics
for (var i = 0; i < comics.length; i++) {
    allComics.innerHTML += '<div class="card">' +
        '<img class="card-img-top" src="' + comics[i].image + '">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' + comics[i].title + '</h4>' +
        '<p class="card-text">' + "Author: " + comics[i].author + '<br>' +
        '<p class="card-text">' + "Genre: " + comics[i].genre + '<br>' +
        '<p class="card-text">' + "Rating: " + comics[i].rating + '<br>' +
        '</p>' + '</p>' + '</p>' +
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#' + comics[i].rating + '">' + "More Information" + '</button>' +
        '<div class="modal fade" id="' + comics[i].rating + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="exampleModalLabel">' + comics[i].title + '</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body">' + comics[i].short + 
        '</div>' +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +

        '</div>' +
        '</div>' +
        '</div>' +
        '</div>'
    '</div>' + '</div>';
};

//adding new type to the array

function newItem() {
    var titelInput = document.getElementById('titel_input').value;
    var authorInput = document.getElementById('Author_input').value;
    var genreInput = document.getElementById('Genre_input').value;
    var publisherInput = document.getElementById('Publisher_input').value;
    var ratingInput = document.getElementById('Rating_input').value;
    var shortInput = document.getElementById('Short_input').value;
    var allnew = [titelInput, authorInput, genreInput, publisherInput, ratingInput, shortInput];
    var newdiv = document.createElement("div");
    newdiv.appendChild(document.createTextNode(allnew));
    document.body.appendChild(newdiv);
};


if (authorInput == "Danielle Steel" || 
        authorInput == "danielle steel" ||  
        authorInput == "Roland Emmerich" || 
        authorInput == "roland emmerich") {

        prompt("Sorry. I can´t save this because of the Author.");

    };



