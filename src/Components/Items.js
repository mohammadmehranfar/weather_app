import React , {useContext, useEffect, useRef} from 'react';
import styles from './Items.module.css'
import { fetchWeather } from '../api/fetchWeather';
import { context } from './ItemContext';
const Items = ({name,source}) => {
    const {dispatch} = useContext(context);
    const useInsideAlerter = ref => {
        useEffect(() => {
            async function handleClickInside(event) {
                if (ref.current && ref.current.contains(event.target)) {
                    const data = await fetchWeather(name);
                    dispatch({type : 'ADD-CITY',payload : data});
                }
            }
            document.addEventListener("mousedown", handleClickInside);
            return () => {
                document.removeEventListener("mousedown", handleClickInside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useInsideAlerter(wrapperRef);
    return (
        <React.Fragment>
            <div className = {styles.block} ref = {wrapperRef}>
                <div className = {styles.imgBox}>
                    <img src = {source} className = {styles.cover} alt = 'pic'/>
                </div>
                <div className = {styles.details}>
                    <div className = {styles.listName}>
                        <h4>{name}</h4>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
};

export default Items;