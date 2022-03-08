import React from 'react';
import styles from './Items.module.css'
const Items = ({name,source}) => {
    return (
        <React.Fragment>
            <div className = {styles.block}>
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