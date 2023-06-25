import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../useGoogleSearch';

const SearchPage = () => {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    console.log("DATA", data);
    return (
        <div className="SearchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>
            </div>
            <div className='searchPage__resutls'></div>
        </div>
    )
}

export default SearchPage