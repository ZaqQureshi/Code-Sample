import React, { useState, useEffect } from "react";
import { useAutoSuggestSearch } from './autoSuggestSearch.styles';
import Link from "next/link";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { client } from '../../lib/graphql/client';
import { BLOG_TITLE } from '../../lib/graphql/query';
export default function AutoSuggestSearch() {
    const classes = useAutoSuggestSearch();
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");
    useEffect(() => {
        if(userInput!==""){
            try {
                client.query({
                    query: BLOG_TITLE,
                    variables: { title: userInput },
                }).then((data) => {
                    if (data.data.blogs.length !== 0) {
                        setShowSuggestions(true);
                        setSuggestions(data.data.blogs);
                    }
                })
            } catch (error) {
                return {
                    notFound: true,
                };
            }
        }else{
            setShowSuggestions(false);
            setSuggestions([]);
        }
    }, [userInput]);

    const onChange = (e) => {
        const userInput = e.currentTarget.value;
        setUserInput(userInput)
    };

    const onClick = (e) => {
        // setUserInput(e.currentTarget.innerText)
        setUserInput("")
        setShowSuggestions(false)
    };

    return (
        <>
            <Paper
                className={classes.searchInput}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                    type="search"
                    onChange={onChange}
                    // onKeyDown={onKeyDown}
                    value={userInput}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {
                showSuggestions?
                <Paper className={classes.searchFiltered}>
                    {suggestions.map((suggested, index) => {
                        return (
                            <>
                            <Link href={`/blog/${suggested.id}`} key={suggested.id}>
                                <a onClick={onClick}>{suggested.title}</a>
                            </Link><br/>
                            </>
                        );
                    })}
                </Paper>:<></>
            }
        </>
    );
}