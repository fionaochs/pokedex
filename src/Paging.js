import React, { Component } from 'react';

export default class Paging extends Component {
    constructor(){
        super();
        this.state = { page: 1 };
    }
    componentDidMount() {
        this.updateSearchControls();
    
        window.addEventListener("hashchange", () => {
          this.updateSearchControls();
        });
      }
      updatePage(increment) {
        const { page } = this.state;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        searchParams.set("page", page + increment);
    
        window.location.hash = searchParams.toString();
      }
      updateSearchControls() {
        const { page } = this.state;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
    
        let pageToUse = page;
    
        const parsedPage = parseInt(searchParams.get("page"), 10);
        if (isNaN(parsedPage)) {
          pageToUse = 1;
        } else {
          pageToUse = parsedPage;
        }
    
        this.setState({ page: pageToUse });
      }
    
    render() {
    const page = this.state.page;
    const perPage = 10; 
    const count = this.props.count;
    const queryString = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(queryString);

    const parsedPage = parseInt(searchParams.get("page"));

    let pageToUse;
    if (isNaN(parsedPage)) {
      pageToUse = 1;
    } else {
      pageToUse = parsedPage;
    }

    if (!count) {
      return <p className="paging">No results, try another search</p>;
    }

    const lastPage = Math.ceil(count / perPage);

      return <p className="paging">
      <button className="prev"
        onClick={() => this.updatePage(-1)}
        disabled={pageToUse === 1 ? "true" : ""}
        type="button"
      > ◀ </button>

      <span> Page {pageToUse} of {lastPage} </span>
      <button className="next" disabled={pageToUse === lastPage ? "true" : ""}
        onClick={() => this.updatePage(1)}
        type="button"
      > ▶ </button>
    </p>
    }
}