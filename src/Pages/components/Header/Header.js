import React from 'react';
import './styles.css';
import SearchBar from '../Search/SearchBar';
import { useHistory } from 'react-router-dom';

export const Header = (props) => {

    const history = useHistory();

    return (
        <div className="header">
            <h1 className="title" onClick={() => history.push('/')}>Wookie Movies</h1> 
            <SearchBar {...props}/> 
            
        </div>
    )
}