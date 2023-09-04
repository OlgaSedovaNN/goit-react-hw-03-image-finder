import React from "react";
import {SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel,SearchFormInput  } from './Searchbar.styled'
import { FaSearch } from "react-icons/fa";




export const Searchbar = ({onSubmit}) => {
  
    return (
        <SearchbarHeader>
    <SearchForm onSubmit={onSubmit}>
    <SearchFormButton type="submit" ><FaSearch />
    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
    </SearchFormButton >

    <SearchFormInput 
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="input"
    />
  </SearchForm >
</SearchbarHeader>
    )
}

