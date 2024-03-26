const express = require('express');
const axios = require('axios').default;
let books = require("./booksdb.js");
const public_users = express.Router();
let url = "https://tatianachris-5000.theianext-0-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai";


public_users.get('/books', async function getBooks(res) {
    res(JSON.stringify({books}, null, 10));
});


        


    
    (JSON.stringify({books}, null, 10));
    });
    axios.get(url).then(getBooks(res) {
        console.log(res);
    }).catch(getBooks(err) {
        console.log(err)
    })


    const listBooks = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books}, null, 10)));
    });
    get_books.then(() => console.log("Promise for Task 10 resolved!"));
});

public_users.get('/books/isbn/:isbn', async function findIsbn (req, res) {
    let newBookList = await listBooks;
    const booksByIsbn = req.params.isbn; 

    const listBooks = new Promise((resolve, reject) => {
        resolve(JSON.stringify({books}, null, 10));
    });
    const get_isbn = new Promise((resolve, reject) => {
        if (book.isbn === booksByIsbn) {
            return resolve(res.send(JSON.stringify(newBookList)));
        } else {
            return reject(console.log("Can't find book with ISBN provided."));
        }
    });
    getBooks(res).then(() => {
        get_isbn.then(() => console.log("Promise for Task 11 resolved!"));
    });
});

public_users.get('/books/author/:author', async function findAuthor (req, res) {
    let newBookList = await listBooks;
    const booksByAuthor = req.params.author;

    const listBooks = new Promise((resolve, reject) => {
        resolve(JSON.stringify({books}, null, 10));
    });
    const get_author = new Promise((resolve, reject) => {
        if (book.author === booksByAuthor) {
            return resolve(res.send(JSON.stringify(newBookList)));
        } else {
            return reject(console.log("Can't find book with Author provided."));
        }
    });
    listBooks.then(() => {
        get_author.then(() => console.log("Promise for Task 12 resolved!"));
    });
});

public_users.get('/books/title/:title', async function findTitle (reqq, res) {
    let newBookList = await listBooks;
    const booksByTitle = req.params.title;

    const listBooks = new Promise((resolve, reject) => {
        resolve(JSON.stringify({books}, null, 10));
    });
    const get_title = new Promise((resolve, reject) => {
        if (book.title === booksByTitle) {
            return resolve(res.send(JSON.stringify(newBookList)));
        } else {
            return reject(console.log("Can't find book with Title provided."));
        }
    });
    listBooks.then(() => {
        get_title.then(() => console.log("Promise for Task 13 resolved!"));
    });
});

module.exports.general = public_users;
