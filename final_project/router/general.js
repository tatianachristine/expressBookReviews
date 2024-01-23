const express = require('express');
const axios = require('axios');
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
public_users.get('/',function (err, req, res) {
  //Write your code here
    //res.send(JSON.stringify(books,null,10));
    let options = {
        host: 'https://tatianachris-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai',
        path: '/'
    });

    http.req(options, function(res) {
        let foundBooks = books;

        response.on('end', function() {
            console.log(foundBooks);
        });
    }).end();*/
    
})

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
    const isbn = req.params.isbn;
    //res.send(books[isbn]);
    /*let options = {
        host: '',
        path: '/isbn/:isbn'
    });

    http.request(options,function(response) {
        let foundBooks = books;

        response.on('data', function(isbn) {
            foundBooks += isbn;
        });
        response.on('end', function() {
            console.log(foundBooks);
        });
    }).end();*/
    const connectToUrl = (url) => {
        const booksByIsbn = axios.get(url);
        console.log(booksByIsbn);
        booksByIsbn.then (resp => {
            console.log("Fulfilled");
            console.log(resp.data);
        })
        .catch(err => {
            console.log("Rejected");
        })
    }

    connectToUrl('https://tatianachris-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/isbn/1');
})
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
    const booksByAuthor = req.params.author;
    //const bookArray = Object.values(books);

    /*let filteredValues = bookArray.filter((book) => {
        if (book.author === booksByAuthor) {
            return (Object.entries(books))
        };
    });

    res.send({"booksbyauthor" : filteredValues});*/
    /*let options = {
        host: '',
        path: '/author/:author'
    });

    http.request(options,function(response) {
        let foundBooks = books;

        response.on('data', function(author) {
            foundBooks += author;
        });
        response.on('end', function() {
            console.log(foundBooks);
        });
    }).end();*/
    const connectToUrl = (url) => {
        const booksByAuthor = axios.get(url);
        console.log(booksByAuthor);
        booksByIsbn.then (resp => {
            console.log("Fulfilled");
            console.log(resp.data);
        })
        .catch(err => {
            console.log("Rejected");
        })
    }

    connectToUrl('https://tatianachris-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/author/Chinua Achebe');
})

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
    const booksByTitle = req.params.title;
    //const bookArray = Object.values(books);

    /*let filteredValues = bookArray.filter((book) => {
        if (book.title === booksByTitle) {
            return (Object.entries(books))
        };
    });

    res.send({"booksbytitle" : filteredValues})*/
    /*let options = {
        host: '',
        path: '/title/:title'
    });

    http.request(options,function(response) {
        let foundBooks = books;

        response.on('data', function(title) {
            foundBooks += title;
        });
        response.on('end', function() {
            console.log(foundBooks);
        });
    }).end();*/
    const connectToUrl = (url) => {
        const booksByTitle = axios.get(url);
        console.log(booksByTitle);
        booksByIsbn.then (resp => {
            console.log("Fulfilled");
            console.log(resp.data);
        })
        .catch(err => {
            console.log("Rejected");
        })
    }

    connectToUrl('https://tatianachris-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/title/Fairy Tales');
})

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
