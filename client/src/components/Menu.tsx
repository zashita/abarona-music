import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useRouter} from "next/router";
import {Grid} from "@mui/material";
import {Fragment} from "react";
import {useActions} from "@/hooks/useActions";
import axios from "axios";

export interface MenuProps {
    trackID: string;
}

const options = [
    'Track info',
    'Delete track'
];

const ITEM_HEIGHT = 48;

const CustomMenu: React.FC<MenuProps> = ({trackID}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const deleteTrack = async (id: string) =>{
        await axios.delete('http://localhost:5000/tracks/' + id);
    }
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const router = useRouter();

    const menuItemOnClick = (option: string) => {
        if(option === 'Track info'){
            router.push('/tracks/' + trackID);
        } else{
            deleteTrack(trackID).then(promise => {
                router.push('/tracks')
            })
        }
    }


    return (
        <Fragment>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option}
                        onClick={() => menuItemOnClick(option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
}

export default CustomMenu;
