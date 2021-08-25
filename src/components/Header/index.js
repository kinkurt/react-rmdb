import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (

    <Wrapper>
        <Content>
            <Link to ='/'>
                <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <div>
                <a href="https://youtu.be/nTeuhbP7wdE">Tutorial by Thomas Weibenfalk</a>
                </div>
                <div>
                <a href="https://github.com/kinkurt/react-rmdb.git">Github</a></div>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;