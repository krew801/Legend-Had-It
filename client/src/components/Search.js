import React, { useState } from 'react';
import './App.css';

function Search() {
  const [search, setSearch] = useState('');
  



  const fetchItems = async (search) => {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&key=AIzaSyBqQzJgdh01GMndWTupAVNzfeDWnOvBfJk&part=${search}`
    );
    const items = await data.json();
    console.log(items)
  }

  return (
    <div className="Search">
      <h1>Search Page</h1>
      {/* <!-- Load icon library --> */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      {/* <!-- The form --> */}
      <form className="example" >
        <input type="text" placeholder="Find Your Path.." name="search" onChange={ e => setSearch(e.target.value)}/>
        <button type="submit" onClick={(e) => {e.preventDefault(); fetchItems(search);}}><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default Search;

