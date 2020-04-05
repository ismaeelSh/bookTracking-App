import React, { Component } from 'react'

class SearchBooksInput extends Component {
    state = {
      value: '',
    }
    handleChange = event => {
      const val = event.target.value;
      this.setState({ value: val }, () => {
        this.props.onSearch(val);
      })
    }
    render() {
      return (
        <div className="search-books-input-wrapper">
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search by title or author" autoFocus />
        </div>
      );
    }
  }

export default SearchBooksInput;