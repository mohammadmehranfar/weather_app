
import Search from './Components/Search';
import styles from './App.module.css'
import ChatManager from './Components/ChatManager';
import ItemContext from './Components/ItemContext';
function App() {
  return (
    <div className = {styles.container}>
        <div className = {styles.header}>
          <ItemContext>
            <div className = {styles.leftSide}>
                <Search/>
            </div>
            <div className = {styles.rightSide}>
                <ChatManager/>
            </div>
          </ItemContext>
        </div>
      
    </div>
  );
}

export default App;
