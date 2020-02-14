import React, { Component } from 'react';

export default class Search extends Component {
    state = {
        searchInput: null
    }
    componentDidMount() {
        this.updateSearchControls();
    
        window.addEventListener("hashchange", () => {
          this.updateSearchControls();
        });
      }
    updateSearchControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        //grab sort=id&pokemon=geo&page=1 from URL
        //set to new searchParams
    
        this.setState({
          searchInput: searchParams.get("pokemon") || "",
        });
        //returns first value with pokemon or blank and set to searchInput
        //updates value of search bar with pokemon search from URL
      }
      handleSubmit = event => {
        const form = document.querySelector("form");
        event.preventDefault();
        const formData = new FormData(form);
        //get search input from form
    
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
    
        searchParams.set("pokemon", formData.get("search"));
        //set search info from form data to URL
        
        //reset to page 1 as this is new search
        searchParams.set("page", 1);
        window.location.hash = searchParams.toString();
      };


    render() {
        return (
            <form class="options" onSubmit={this.handleSubmit}>
              <label for="search">Search:</label>
              <p>
                <input id="search" name="search"
                  onChange={e => this.setState({ searchInput: e.target.value })}
                  value={this.state.searchInput}
                />
              </p>
              <button>Submit</button>
              </form>
        );
    }
}