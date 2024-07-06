// Concatenating string properties

var book1;
var book2;
var book3;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien",
	publisher: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
	publisher: "Philip Pullman"
};

book3 = {
	title: "harry poter",
	author: "jk rowlling",
	publisher: "jk rowling"
};

console.log(book1.title + " by " + book1.author + " published by " + book1.publisher);
console.log(book2.title + " by " + book2.author + " published by " + book2.publisher);
console.log(book3.title + " by " + book3.author + " published by " + book3.publisher);

/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */