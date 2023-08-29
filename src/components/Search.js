import React, { useState } from "react";

function Search({ search, setSearch }) {

  function handleSearch(e) {
    setSearch(e.target.value)

  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
