import React from 'react';
import Navbar from "@/components/Navbar";
import {Container} from "@mui/material";
import {drawerWidth} from "@/components/Navbar";
import Box from "@mui/material/Box";
import Player from "@/components/Player";
import {NextThunkDispatch, wrapper} from "@/store";
import {fetchTracks} from "@/store/actions-creators/track";

const MainLayout = (props:{children: any}) => {
    return (
        <div style={{backgroundColor: '#3b3b3b', minHeight: '100vh'}}>
            <Navbar/>
            <Container style={{marginLeft:`${drawerWidth}px`, width: `calc(100% - ${drawerWidth}px`}} >
                {props.children}

            </Container>
            <Box bottom={0} position={'fixed'} zIndex={5000} bgcolor={'#4f4f4f'} width={'100%'} borderTop={'1px solid gray'}>
                <Player/>
            </Box>

        </div>
    );
};

export default MainLayout;



