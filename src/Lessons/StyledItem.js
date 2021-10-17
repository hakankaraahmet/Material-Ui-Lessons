import React from 'react'
import { styled } from '@mui/material';
import { Paper } from '@mui/material';

// styled features of material ui
// with the help of styled we create unique components that we use wherever we want


const Item = styled(Paper)`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 169px;
    height: 46px;
    border-radius: 20px;
    color: #fff;
    background-color: #2A9564;
    font-weight: 800;
    font-size: 14px;
`

const StyledItem = () => {
    return (
        <Item>
            Hakan Karaahmet
        </Item>
    )
}

export default StyledItem
