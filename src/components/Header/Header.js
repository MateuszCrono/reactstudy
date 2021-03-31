import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import Search from '../Search/Search';



class Header extends React.Component {

    render() {
        return  (
            <header className = {styles.component}>
                <Container>
                    <div className = {styles.wrapper}>
                        <Link to = {'/'} className = {styles.logo}>
                            <Icon name='cat' />
                        </Link> 
                        <Search />
                        <nav>
                            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                            <NavLink exact to='/faq' activeClassName='active'>Faq</NavLink>
                        </nav>
                    </div>
                </Container>
            </header>    
        );
    }
}

export default Header 