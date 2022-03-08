import React , { useState } from 'react';
import styles from './Search.module.css';
import { myCities } from '../cities/cities';
import Items from './Items';
const Search = () => {
    const [search,setSearch] = useState('');
    const searchCities = myCities.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <React.Fragment>
            <div className = {styles.search}>
                <div>
                    <input type = 'text' value = {search} onChange = {e => setSearch(e.target.value)} placeholder = 'Search a city...'/>
                </div>
            </div>
            {
                <div className = {styles.cityList}>
                    {
                        searchCities.map(el => <Items key = {el.id} {...el}/>)
                    }
                </div>
            }
        </React.Fragment>
        
    );
    
};

export default Search;