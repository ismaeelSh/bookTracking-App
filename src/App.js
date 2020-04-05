import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import getAll from './BookData'
import { debounce } from 'throttle-debounce'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading'},
    { key: 'wantToRead', name: 'Want to Read'},
    { key: 'read', name: 'Have Read'},
  ];
  state = {
    myBooks: [],
    searchBooks: [],
  };
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ myBooks: books });
    })
  }
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    let updatedBooks = [];
    updatedBooks = this.state.myBooks.filter(b => b.id !== book.id)

    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book)
    }
    
    this.setState({myBooks: updatedBooks,
    })
  };

  searchForBooks = debounce(300, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if(books.error) {
          this.setState({ searchBooks: [] })
        } else {
          this.setState({ searchBooks: books })
        }
      });
    } else {
      this.setState({ searchBooks: [] })
    }
  });
  resetSearch = () => {
    this.setState({ searchBooks: [] })
  };

  render() {
    const { myBooks, searchBooks } = this.state;
    return (
      <div className="app">
        <Route 
          exact 
          path="/" 
        render={() => (
          <ListBooks 
            bookshelves={this.bookshelves} 
            books={myBooks} 
            onMove={this.moveBook} 
          />)} />
        <Route
          path="/search" 
            render={() => ( 
              <SearchBooks 
                searchBooks={searchBooks} 
                myBooks={myBooks} 
                onMove={this.moveBook} 
                onSearch={this.searchForBooks} 
                onResetSearch={this.resetSearch} 
              />)} />
      </div>
    );
  }
}




// class BookSearch extends Component {
//   render() {
//     return (
//       <div className="search-books">
//         <SearchBar />
//         <SearchResults />
//       </div>
//     )
//   }
// }

export default BooksApp
