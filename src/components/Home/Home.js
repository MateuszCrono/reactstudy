import React from 'react'; 
import styles from './App.scss';
import ListContainer from '../List/ListContainer.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js'
// import {pageContents, listData} from '../../data/dataStore';


class Home extends React.Component {

  static propTypes = {
    lists:  PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }
  
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <Search />
      {lists.map(listData => (
      <ListContainer key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}



export default Home;
