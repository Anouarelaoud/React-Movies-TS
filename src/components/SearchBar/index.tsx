import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../images/search-icon.svg";
import { Wrapper, Content } from "./SearchBar.styles";

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(searchValue);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, searchValue]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          value={searchValue}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
