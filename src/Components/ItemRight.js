import React from 'react';
import styles from './ChatManager.module.css';
const ItemRight = ({el}) => {
    return (
        <>
            {
                 el.main && 
                (
                    <div className = {styles.chatBox}>
                        <div className = {styles.message}>
                            <div className = {styles.weather}>
                                <h3>
                                    <span>{el.name}</span>
                                    <sup>{el.sys.country}</sup>
                                </h3>
                                <div>
                                    {Math.round(el.main.temp)}
                                    <sup>&deg;C</sup>
                                </div>
                                <div>
                                    <p>{el.weather[0].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ItemRight;