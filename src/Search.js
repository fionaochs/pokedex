import React, { Component } from 'react';

export default class Search extends Component {
    componentDidMount() {
        this.updateSearchControls();
    
        window.addEventListener("hashchange", () => {
          this.updateSearchControls();
        });
      }
    state = {
        searchInput: null
    }
    updateSearchControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
    
        this.setState({
          searchInput: searchParams.get("pokemon") || "",
        });
      }
      handleSubmit = event => {
        const form = document.querySelector("form");
        event.preventDefault();
        const formData = new FormData(form);
    
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
    
        searchParams.set("pokemon", formData.get("search"));
        //reset to page 1 as this is new search
        searchParams.set("page", 1);
        window.location.hash = searchParams.toString();
      };


    render() {
        return (
            <form class="options" onSubmit={this.handleSubmit}>
              <label for="search">Search:</label>
              <p>
                <input
                  id="search"
                  name="search"
                  onChange={e => this.setState({ searchInput: e.target.value })}
                  value={this.state.searchInput}
                />
              </p>
              <button>Submit</button>
              </form>
        );
    }
}