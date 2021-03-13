import React from 'react'; 
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    image: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
        <section className={styles.component}>
          <h2 className={styles.title}><Hero titleText={this.props.title} image={this.props.image} /> </h2>
          <div className={styles.description}>
          {this.props.children}
          </div>
          <div className={styles.columns}>
            <Column title='Apprentices' />
            <Column title='Warriors' />
            <Column title='Masters' />
          </div>
        </section>
    )
  }
}

export default List;
