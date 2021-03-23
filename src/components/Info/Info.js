import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { InfoData } from '../../data/dataStore';
import styles from './info.scss';


class Info extends React.Component {

    render() {
    return (
        <Container>
            <Hero className={styles.title} titleText={InfoData.title} image={InfoData.image} />
            <p>{InfoData.description}</p>
        </Container>
             );
            }
}


export default Info;