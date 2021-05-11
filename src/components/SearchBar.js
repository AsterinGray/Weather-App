import React from 'react';
import { useRecoilState } from 'recoil';

import { inputQuery } from '../recoil/store';

const SearchBar = () => {
  const [query, setQuery] = useRecoilState(inputQuery);

  return (
    <div className="search-bar">
      <form action="" className="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">
          <img src="./images/search.png" alt="search-icon" />
        </label>
        <input
          type="text"
          id="search"
          value={query}
          placeholder="Search City Name"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
