import React, { useContext } from 'react';
import { context } from './ItemContext';
import ItemRight from './ItemRight';
const ChatManager = () => {
    const {state} = useContext(context);
    const {cityList} = state;
    return (
        <div>
             {
                cityList && cityList.map((e,i) => <ItemRight el = {e} key = {i}/>)
            }
        </div>
    )
};

export default ChatManager;