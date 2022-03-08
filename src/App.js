
import Search from './Components/Search';
import styles from './App.module.css'

function App() {
  return (
    <div className = {styles.container}>
        <div className = {styles.header}>
            <div className = {styles.leftSide}>
                <Search/>
            </div>
            <div className = {styles.rightSide}>

            </div>
        </div>
      
    </div>
  );
}

export default App;
