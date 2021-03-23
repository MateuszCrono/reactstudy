import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FaqData } from '../../data/dataStore';
import styles from './faq.scss';

class Faq extends React.Component {

    render() {
    return (
        <Container>
            <Hero className={styles.title} titleText={FaqData.title} image={FaqData.image} />
            <p>{FaqData.description}</p>
        </Container>
  );
}
}


export default Faq;