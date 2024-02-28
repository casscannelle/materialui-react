import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function BoxImg() {
    return (
        <ImageList className="album" sx={{ width: 600, height: 410 }} cols={3} rowHeight={200} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
    }
    
    const itemData = [
      {
        img: 'https://f7j8i5n9.stackpathcdn.com/wp-content/uploads/2016/04/Paris.jpg',
        title: 'Paris',
      },
      {
        img: 'https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london-1068x641.jpg',
        title: 'Londres',
      },
      {
        img: 'https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg',
        title: 'Rio de Janeiro',
      },
      {
        img: 'https://media.cntraveler.com/photos/63483e15ef943eff59de603a/1:1/w_2001,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg',
        title: 'NYC',
      },
      {
        img: 'https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2023/09/cidades-mais-bonitas-da-italia.jpg?w=750&ssl=1',
        title: 'Italia',
      },
      {
        img: 'https://cdn.britannica.com/36/178136-050-7F77D46B/village-Alpine-valley-canton-Saint-Moritz-Engadin.jpg',
        title: 'Suica',
      },
      
    ];

export default BoxImg;