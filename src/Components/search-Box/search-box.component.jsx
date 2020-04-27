import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (<input 
        className="search"
        type="search" autoFocus 
        placeholder = { placeholder }
        // this,setState has a callBack Function
        onChange={ handleChange }
    />)
}