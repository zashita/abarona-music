import React from 'react';
import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";

const MainLayout = (props:{children: any}) => {
    return (
        <>
            <Navbar/>
            <Container>
                {props.children}
            </Container>

        </>
    );
};

export default MainLayout;
