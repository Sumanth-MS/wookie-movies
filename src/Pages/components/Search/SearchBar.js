import React, { useState } from 'react';
import Network from '../../../service/core.api';
import { useHistory } from "react-router-dom";
import './styles.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
  
const SearchBar = (props) => {
    const [results, setResults] = useState([]);
    let history = useHistory();
    const items = results.map((res, index) => {return {id: index, name: res.title, movie: res}});

    const handleChange = async (value) => {
        try{
            if(!value) {
                setResults([])
            } else {
                let response = await Network.searchMovie(value)
                setResults(response.data.movies)
            }
        }catch(e){
            console.log(e)
        }
    }

    const handleOnSelect = ({movie}) => {
        history.push({
            pathname: `/${movie.slug}`,
            state: movie
        })
    }
    
    return (
        <div style={{width: '400px'}}>
            <ReactSearchAutocomplete
            items={items}
            onSearch={handleChange}
            onSelect={handleOnSelect}
            autoFocus
            inputDebounce={300}
            placeholder="Search Movies"
            />
        </div>
    );
}


export default SearchBar
  