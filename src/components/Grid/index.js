import React from 'react';
import PropTypes from 'prop-types';
//styles

import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.propTypes = {
    header: PropTypes.string,
    //children doesnt need to be checked because its a built in prop.
};

export default Grid;