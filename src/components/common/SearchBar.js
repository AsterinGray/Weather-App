import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { inputQuery } from '../../recoil/store';

const SearchBar = () => {
  const setQuery = useSetRecoilState(inputQuery);
  const [input, setInput] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <div className="search-bar">
      <form action="" className="" onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor="inp">
          <img src="./images/search.png" alt="search-icon" />
        </label>
        <input
          type="text"
          id="inp"
          value={input}
          placeholder="Search City Name"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
