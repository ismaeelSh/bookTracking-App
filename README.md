# MyReads Project

This is the first project for the Udacity React Nanodegree program.
MyReads App is a simple application that allows users to search for books (by title or author name) and store their prefered books as: 
    - Currently Reading (the user reading at the moment)
    - Want to Read (the user want to read)
    - Read (the user has read)


# Installation

Download or clone this repository and use the following NPM commands to install dependencies:
    - npm install
    - npm start (opens application in [http://localhost:3000](http://localhost:3000))


# Functionality

The application starts with a main page that displays a list of shelves (Currently Reading, Want to Read, Read). Each of these shelves contain a number of books.
When a user selects a book on a shelve, a drop down menu appears for each selected book for manipulation. The drop-down menu contains commands such as:
    - Move To (grayed)
        - Currently Reading
        - Want to Read
        - Read
        - None
Selecting an option(shelve) moves the books to that shelve.


# Backend Server

This project uses a backend server (BooksAPI.js) to perform the necessary operations on the backend. The BooksAPI uses a fixed set of cached search results and is limited to a particular set of search terms (Allowed Search Terms). 
The 'Allowed Search Terms' are the _only_ terms that will work wtih the backend, so don't be surprised if your searches for some terms don't come back with any results.


# Allowed Search Terms

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'


# Copyright and License 

This project was built on a react starter code (https://github.com/udacity/reactnd-project-myreads-starter) available for _all_ Udacity students.
