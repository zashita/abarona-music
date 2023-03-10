import React from 'react';
import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";
import {drawerWidth} from "@/components/Navbar";

const MainLayout = (props:{children: any}) => {
    return (
        <div style={{backgroundColor: '#3b3b3b', minHeight: '100vh'}}>
            <Navbar/>
            <Container style={{marginLeft:`${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px`}} >
                {props.children}
            </Container>

        </div>
    );
};

export default MainLayout;
