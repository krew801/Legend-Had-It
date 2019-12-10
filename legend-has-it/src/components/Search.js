import React, { useState } from 'react';
import './App.css';

function Search() {
  const [search, setSearch] = useState('');



  const fetchItems = async (search) => {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/search/?part=${search}`
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
        <button type="submit" onClick={(e) => {e.preventDefault(); fetchItems(search);}}><i class="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default Search;
// import React, { useState, useEffect } from "react";
// import './App.css';

// const Search = () => {
//   const [search, setSearch] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState('');
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     if (query) {
//       // TODO: Replace this url with the url for your API.
//       fetch(`https://www.googleapis.com/youtube/v3/search/list`)
//         .then(response => response.json())

//         // TODO: Your API might not have a "Search" property.
//         // .then(({ Search }) => setResults(Search))
//         .catch(err => setError(err));
//     }
//   }, [query]);

//   const handleInputChange = event => {
//     setSearch(event.target.value);
//   };

//   const handleButtonClick = event => {
//     event.preventDefault();
//     setQuery(search);
//   };

//   return <>
//     <div>
//       <input type="text" value={search} onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Search</button>
//     </div>

//     {error && <div>{error}</div>}

//     <div>
//       {/* TODO: Display the properties you need from the data returned by your API. */}
//       {results.map(result => <pre>{JSON.stringify(result)}</pre>)}
//     </div>
//   </>;
// };

// export default Search;

