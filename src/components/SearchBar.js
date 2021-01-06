import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { fetchSearched } from "../redux/actions/immersionAction";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(textInput, 1));
    setTextInput("");
  };

  const { searched } = useSelector((state) => state.immersion);
  return (
    <>
      <form className="search" action="">
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          placeholder="search..."
        />
        <button className="search-button" onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
      {searched.length > 0 && (
        <Redirect
          to={{
            pathname: "/SearchResults",
            state: searched,
          }}
        />
      )}
    </>
  );
};

export default SearchBar;
