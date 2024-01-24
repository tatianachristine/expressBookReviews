const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const doesExist = (username)=>{
    let userswithsamename = users.filter((user)=>{
      return user.username === username
    });
    if(userswithsamename.length > 0){
      return true;
    } else {
      return false;
    }
}

public_users.post("/register", (req,res) => {
  //Write your code here
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        if (!doesExist(username)) { 
            users.push({"username":username,"password":password});
            return res.status(200).json({message: "User successfully registred. Now you can login"});
        } else {
        return res.status(404).json({message: "User already exists!"});    
        }
    } 
    return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/books',function (req, res) {
  //Write your code here
    //res.send(JSON.stringify(books,null,10));
    const listBooks = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books}, null, 10)));
    });

    listBooks.then(() => console.log("Promise for Task 10 resolved"));

});
// Get book details based on ISBN
public_users.get('/books/isbn/:isbn',function (req, res) {
  //Write your code here
    const booksByIsbn = req.params.isbn;
    //const bookArray = Object.values(books);
    //res.send(JSON.stringify(books[isbn]));
    const listBooks = new Promise((resolve, reject) => {
        resolve(true);
    })
    const filterBooks = new Promise((resolve, reject) => {
        let reqBooks = listBooks
        if (listBooks.isbn === booksByIsbn) {
            return (Object.values(books)),
            resolve(res.send)
        };
    });
    /*var reqBooks = function() {
        var promise = new Promise((resolve, reject) => {
            if (listBooks === booksByIsbn) {
                resolve(res.send({books}));
            }
        });
        return promise;
    };*/
        
    listBooks.then(() => {
        console.log("Promise 1 resolved");
        filterBooks.then(() => {
            res.send(Object.entries({reqBooks})),
            console.log("Promise 2 resolved")
        });
    });
});

  
// Get book details based on author
public_users.get('/books/author/:author',function (req, res) {
  //Write your code here
    const booksByAuthor = req.params.author;
    //const bookArray = Object.values(books);
    const listBooks = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books}, null, 10)));
    });
    const filterBooks = new Promise((resolve, reject) => {
        if (book.author === booksByAuthor) {
            resolve(res.send(JSON.stringify({books}, null, 10)));
        }
    });

    listBooks.then((successMessage) => {
        console.log("From Callback " + successMessage)
        filterBooks.then((successMessage) => {
            console.log("From Callback " + successMessage)
        })
    })
});

// Get all books based on title
public_users.get('/books/title/:title',function (req, res) {
  //Write your code here
    const booksByTitle = req.params.title;
    //const bookArray = Object.values(books);
    const listBooks = new Promise((resolve, reject) => {
        resolve(res.send(JSON.stringify({books}, null, 10)));
    });
    const filterBooks = new Promise((resolve, reject) => {
        if (book.title === booksByTitle) {
            resolve(res.send(JSON.stringify({books}, null, 10)));
        }
    });

    listBooks.then((successMessage) => {
        console.log("From Callback " + successMessage)
        filterBooks.then((successMessage) => {
            console.log("From Callback " + successMessage)
        })
    })
});

// Get book review
public_users.get('/reviews/:isbn', function (req, res) {
    const booksByIsbn = req.params.isbn;
    const bookArray = Object.values(books);

    let filteredValues = bookArray.filter((review) => {
        if (review.isbn === booksByIsbn) {
            return (Object.entries(review))
        };
    });

    res.send(filteredValues);
});

module.exports.general = public_users;
