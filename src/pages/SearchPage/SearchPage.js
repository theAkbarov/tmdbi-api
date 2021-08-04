import React, { useState } from "react";
import Search from "../../components/Search";
const SearchPage = () => {
  const [searchbar, setSearchbar] = useState(true);

  return <Search active={true} setSearchbar={setSearchbar} close={true} />;
};

export default SearchPage;
