import React from 'react'; 
import styles from './App.scss';
import List from '../List/List.js'
import Hero from '../Hero/Hero.js'

class App extends React.Component {
  render() {
    return (
        <main className={styles.component}>
        <h1 className={styles.title}>My first React app is awesome </h1>
        <h2 className={styles.subtitle}>hello React I ve been waiting for you!!!</h2>
        <List />
        <Hero />
        </main>
    )
  }
}



export default App;
