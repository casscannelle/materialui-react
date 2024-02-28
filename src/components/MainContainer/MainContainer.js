import React from 'react';
import { Container } from '@mui/material';
import BoxBasic from '../BoxBasic/BoxBasic';

function MainContainer() {

    const mainStyle = {
        padding: '2%',
        backgroundColor: '#fff', 
        textAlign: 'center', 
        width: '100%',
        fontface: 'Roboto'
        
    };

    const textStyle = {
        textAlign: 'left',
    }

    return (
        <Container fixed style={mainStyle} disableGutters={true}>
            <h1>TITLE</h1>
            <p fixed style={textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisi id ipsum ornare convallis. Nulla convallis molestie pulvinar. Sed sit amet lacus non mi dictum molestie quis nec nisi. Praesent commodo lorem nec bibendum scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nec nunc cursus tortor rhoncus laoreet id vel nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam in felis at ex ultrices rutrum ut sed dolor. Integer tristique lectus interdum libero maximus, nec fringilla lacus tristique. Suspendisse pretium tristique diam. Morbi volutpat euismod nibh in vestibulum. Phasellus interdum risus est, id fermentum purus feugiat eget. Vestibulum et orci magna.</p>
        </Container>
    )

}

export default MainContainer;   