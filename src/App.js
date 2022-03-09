
import Search from './Components/Search';
import styles from './App.module.css'
import ChatManager from './Components/ChatManager';
import { useState } from 'react';
function App() {
  const [city,setCity] = useState('');
  const citySetter = cityName => {
    setCity(cityName);
  }
  return (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.leftSide}>
                <Search cityController = {citySetter}/>
            </div>
            <div className = {styles.rightSide}>
                <ChatManager cityData = {city}/>
            </div>
        </div>
      
    </div>
  );
}

export default App;
