import React, { useState, useEffect } from 'react';
import './App.css';

function Search() {

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('https://www.googleapis.com/youtube/v3/search/list')
    const items = await data.json();
  }

  return (
    <div className="Search">
      <h1>Search Page</h1>
      {/* <!-- Load icon library --> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {/* <!-- The form --> */}
      <form className="example" action="action_page.php">
        <input type="text" placeholder="Find Your Path.." name="search" />
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default Search;
