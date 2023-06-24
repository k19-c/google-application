import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = (props) => {
    const{ hideButtons = false } = props;
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value)

    }

    const search = (e) => {
        e.preventDefault();
        navigate('/search');

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={handleChange} />
                <MicIcon />
            </div>
            {
                !hideButtons ? (
                    <div className="search__buttons">
                        <Button type="submit" variant="outlined" onClick={search}>
                            Google Search
                        </Button>
                        <Button variant="outlined">
                            I'm Feeling Lucky
                        </Button>
                    </div>
                ) : 
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" variant="outlined" onClick={search}>
                        Google Search
                    </Button>
                    <Button className="search__buttonsHidden" variant="outlined">
                        I'm Feeling Lucky
                    </Button>
                </div>
            }
        </form>
    )
}

export default Search