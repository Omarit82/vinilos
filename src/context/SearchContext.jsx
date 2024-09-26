import { createContext, useState } from "react";



export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [ search, setSearch ] = useState('');

    function handleSearch(s){
        setSearch(s);
    }

    const values = {
        handleSearch,
        search
    }

    return(
        <SearchContext.Provider value={values} >
            { children }
        </SearchContext.Provider>
    )
}