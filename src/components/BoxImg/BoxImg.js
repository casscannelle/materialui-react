import React from 'react';
import Box from '@mui/material/Box';

function BoxImg() {
    return (
        <Box
            sx={{
                width: 100,
                
            }}
        >
            <img
                src="https://f7j8i5n9.stackpathcdn.com/wp-content/uploads/2016/04/Paris.jpg"
                alt="Paris"
                width="80%"
                style={{ display: 'block' }} 
            />
        </Box>
    );
}

export default BoxImg;
